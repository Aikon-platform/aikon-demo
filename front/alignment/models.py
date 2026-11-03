import shutil

import requests
import orjson
import traceback

from django.db import models
from django.urls import reverse
from PIL import Image as PImage

from dticlustering.models import DTIClustering
from regions.models import AbstractAPITaskOnCrops

from . import dti

# Index entry of the DTI prototype, the reference of DTI alignments
DTI_PROTOTYPE_ID = "prototype"
DTI_PROTOTYPE_DOC = {
    "uid": "dti_prototype",
    "type": "dti",
    "src": "",
    "metadata": {"name": "DTI prototype"},
}


class Alignment(AbstractAPITaskOnCrops("alignment")):
    # DTI method: shadow clustering task that computes the alignment,
    # but redirecting API notifications to this task
    dti_task = models.ForeignKey(
        DTIClustering,
        null=True,
        blank=True,
        editable=False,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    def __str__(self):
        if not self.name:
            if self.method == "dti":
                return "DTI alignment"
            param = getattr(self, "parameters", {})
            feature = param.get("ransac_feature", "SIFT")
            return f"{feature} alignment"
        return self.name

    def save(self, *args, **kwargs):
        super().save()

    @property
    def method(self) -> str:
        return (self.parameters or {}).get("method", "ransac")

    def start_task(self, endpoint: str = "start"):
        if self.method != "dti":
            return super().start_task(endpoint)

        if self.crops:
            self.write_log("Crops are not supported by DTI alignment")
            self.status = "ERROR"
            self.set_fields_on_terminate()
            self.save()
            return

        self.dti_task = DTIClustering.objects.create(
            name=f"Alignment {self.id}",
            notify_email=False,
            requested_by=self.requested_by,
            dataset=self.dataset,
            # a single prototype: the alignment reference
            parameters={
                **self.parameters.get("dti_parameters", {}), 
                "n_prototypes": 1,
                "empty_cluster_threshold": 0.025
            },
        )
        self.save()

        # HOOK: The API notifies this task instead of the clustering
        self.dti_task.get_notify_url = self.get_notify_url
        self.dti_task.start_task()

        if self.dti_task.is_finished:
            self.write_log(self.dti_task.full_log or "Could not start DTI task")
            self.status = "ERROR"
            self.set_fields_on_terminate()
            self.save()

    def cancel_task(self, endpoint: str = "cancel"):
        if self.method != "dti":
            return super().cancel_task(endpoint)
        if not self.dti_task:
            return

        self.dti_task.cancel_task()
        self.status = self.dti_task.status
        self.set_fields_on_terminate()
        self.save()

    def receive_notification(self, data: dict):
        if self.method != "dti" or not self.dti_task:
            return super().receive_notification(data)

        # The clustering handles its own events (e.g. fetching its results on success),
        # this task then converts its results
        self.dti_task.receive_notification(data)
        if data["event"] == "SUCCESS" and self.dti_task.status != "SUCCESS":
            self.on_task_error(
                {"error": f"DTI clustering failed:\n{self.dti_task.full_log}"}
            )
            return
        super().receive_notification(data)

    def get_progress(self):
        if self.method != "dti":
            return super().get_progress()
        if not self.dti_task:
            return {"status": self.status}
        return {**self.dti_task.get_progress(), "status": self.status}

    def save_alignment_results(self, output: dict):
        if not self.dataset:
            return

        result_urls = output.get("results_url", [])

        if len(result_urls) > 1:
            raise ValueError("Multiple alignment results not supported")

        alignment_results = {}

        for result in result_urls:
            result_url = result.get("result_url", "")
            try:
                response = requests.get(result_url, stream=True)
                response.raise_for_status()
                alignment_results = response.json()
                break
            except Exception as e:
                raise ValueError(
                    f"Could not retrieve alignment result from {result_url}: {e}"
                )

        self._write_alignment_results(alignment_results)

    def save_dti_alignment_results(self):
        """
        Convert the (retrieved) shadow clustering results to alignment results
        (dataset images aligned onto the DTI prototype)
        """
        if not self.dataset:
            return

        dti_path = self.dti_task.result_full_path
        kind, by_path = dti.parse_cluster_csv(dti_path / "cluster_by_path.csv")

        proto_url = self.dti_task.expanded_results["clusters"][0]["proto_url"]
        if not proto_url:
            raise ValueError("No DTI prototype found")
        proto_file = self.result_full_path / f"prototype{(dti_path / proto_url).suffix}"
        shutil.copy(dti_path / proto_url, proto_file)
        with PImage.open(proto_file) as im:
            proto_size = im.size

        index = {
            "sources": {DTI_PROTOTYPE_DOC["uid"]: DTI_PROTOTYPE_DOC},
            "images": [
                {
                    "id": DTI_PROTOTYPE_ID,
                    "src": proto_url,
                    "path": proto_file.name,
                    "metadata": None,
                    "doc_uid": DTI_PROTOTYPE_DOC["uid"],
                    "url": f"{self.result_media_url}/{proto_file.name}",
                }
            ],
        }
        images = [
            {
                "image_id": DTI_PROTOTYPE_ID,
                "transform_matrix": [[1.0, 0.0, 0.0], [0.0, 1.0, 0.0], [0.0, 0.0, 1.0]],
                "keypoints": [],
                "is_reference": True,
            }
        ]

        self.dataset.get_images()
        for doc in self.dataset.documents:
            index["sources"][doc.uid] = doc.to_dict()
            for img in doc.images:
                index["images"].append({**img.to_dict(), "doc_uid": doc.uid})

                # DTI image names: path in the document images, "/" replaced by "+"
                _, to_prototype = by_path.get(
                    str(img.path.relative_to(doc.img_path)).replace("/", "+"),
                    (None, None),
                )
                matrix = None
                if to_prototype:
                    with PImage.open(img.path) as im:
                        matrix = dti.to_pixel_matrix(
                            to_prototype, kind, im.size, proto_size
                        )
                images.append(
                    {"image_id": img.id, "transform_matrix": matrix, "keypoints": []}
                )

        self._write_alignment_results(
            {
                "parameters": {
                    "method": "dti",
                    "target_transform": dti.TARGET_TRANSFORMS[kind],
                    "reference_image": DTI_PROTOTYPE_ID,
                    "transformation_sequence": self.dti_task.parameters.get(
                        "transformation_sequence"
                    ),
                },
                "index": index,
                "images": images,
            }
        )

    def _write_alignment_results(self, alignment_results: dict):
        # Save to a JSON file for the dataset
        with open(self.task_full_path / f"{self.dataset.id}.json", "wb") as f:
            f.write(orjson.dumps(alignment_results))
        self._alignment_results = alignment_results

    def _load_alignment_results(self):
        if not self.dataset:
            return {}
        try:
            with open(self.task_full_path / f"{self.dataset.id}.json", "rb") as f:
                return orjson.loads(f.read())
        except FileNotFoundError:
            return {}

    @property
    def alignment_results(self):
        if not hasattr(self, "_alignment_results"):
            self._alignment_results = self._load_alignment_results()
        return self._alignment_results

    def on_task_success(self, data):
        self.status = "PROCESSING RESULTS"
        self.result_full_path.mkdir(parents=True, exist_ok=True)

        if data is not None:
            output = data.get("output", {})
            if not output:
                self.on_task_error({"error": "No output data"})
                return

            try:
                # DTI results conversion needs the dataset images
                if not self.prepare_dataset_from_api(output):
                    return

                if self.method == "dti":
                    self.save_dti_alignment_results()
                else:
                    self.save_alignment_results(output)

                # Prepare results for display
                self.prepare_alignment_display()

            except Exception as e:
                self.on_task_error({"error": traceback.format_exc()})
                return

        else:
            self.on_task_error({"error": "No output data"})
            return

        return super().on_task_success(data)

    def prepare_alignment_display(self):
        """
        Prepare alignment results for frontend display.
        """
        # The main result file that the frontend will use for display
        if self.alignment_results:
            self.dataset.add_urls_to_serialization(
                self.alignment_results.get("index", {}), self.crops
            )
            with open(self.result_full_path / "alignment.json", "wb") as f:
                f.write(orjson.dumps(self.alignment_results))

    @property
    def alignment_display_url(self):
        return f"{self.result_media_url}/alignment.json"

    def get_alignment_results_for_display(self):
        return self.alignment_results

    def get_download_json_url(self):
        """Get the URL for downloading alignment results in JSON format"""
        return reverse("alignment:download_json", kwargs={"pk": self.pk})
