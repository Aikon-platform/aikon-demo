from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models
from django.utils.functional import cached_property
from django.utils import timezone
from django.urls import reverse
from pathlib import Path
import requests
import uuid
import json
import csv
import io
import traceback
import shutil

from typing import Dict

from datasets.models import Dataset
from tasking.models import AbstractAPITaskOnDataset

User = get_user_model()

API_URL = getattr(settings, "API_URL", "http://localhost:5000")
BASE_URL = "http://web:8002"  # getattr(settings, "BASE_URL", "http://localhost:8000")


class DTIClustering(AbstractAPITaskOnDataset("dticlustering")):
    """
    Main model for a clustering query and result
    """

    api_endpoint_prefix = f"{API_URL}/clustering"
    django_app_name = "dticlustering"

    class Meta:
        verbose_name = "DTI Clustering"

    @property
    def result_zip_exists(self) -> bool:
        """
        True if the result zip file exists
        """
        return (self.result_full_path / "results.zip").exists()

    @property
    def result_summary_url(self) -> str:
        """
        URL to the result summary file
        """
        return f"{self.result_media_url}/summary.zip"

    @property
    def result_zip_url(self) -> str:
        """
        URL to the full result in a zip file
        """
        return f"{self.result_media_url}/results.zip"

    def get_task_kwargs(self):
        return {
            "dataset_url": f"{BASE_URL}{self.dataset.zip_file.url}",  # TODO not only zip_file
            "dataset_id": str(self.dataset.id),
            "parameters": json.dumps(self.parameters),
        }

    def on_task_success(self, data):
        self.status = "FETCHING RESULTS"  # TODO if FETCHING but no results, retry to download result file
        self.save()

        # start collecting results
        # from .tasks import collect_results
        # collect_results.send(str(self.pk), data["output"]["result_url"])
        self.retrieve_results(data["output"]["result_url"])

    def retrieve_results(self, result_url: str):
        # TODO find why the task is not starting
        from zipfile import ZipFile

        try:
            # download the results from the API
            res = requests.get(result_url, stream=True)
            res.raise_for_status()
            self.result_full_path.mkdir(parents=True, exist_ok=True)
            zip_result_file = self.result_full_path / "results.zip"

            with open(zip_result_file, "wb") as f:
                for chunk in res.iter_content(chunk_size=8192):
                    f.write(chunk)

            # unzip the results
            with ZipFile(zip_result_file, "r") as zip_obj:
                zip_obj.extractall(self.result_full_path)

            # create a summary.zip file, with cherry-picked content
            summary_zip = self.result_full_path / "summary.zip"
            cherrypick = [
                "*.csv",
                "clusters.html",
                "clusters/**/*_raw.*",
                "backgrounds/*",
                "masked_prototypes/*",
                "prototypes/*",
            ]

            with ZipFile(summary_zip, "w") as zipObj:
                for cp in cherrypick:
                    for f in self.result_full_path.glob(cp):
                        zipObj.write(f, f.relative_to(self.result_full_path))

            # mark the self as finished
            self.terminate_task()
        except Exception:
            self.terminate_task(status="ERROR", error=traceback.format_exc())

    @classmethod
    def clear_old_tasks(cls, days_before: int = 30) -> Dict[str, int]:
        """
        Clear old clusterings (TODO use abstract cls method?)
        """
        old_clusterings = cls.objects.filter(
            requested_on__lte=timezone.now() - timezone.timedelta(days=days_before)
        )

        # remove results
        for c in old_clusterings:
            shutil.rmtree(c.result_full_path, ignore_errors=True)

        # remove all datasets except those who have a clustering younger than days_before days
        old_datasets = (
            Dataset.objects.exclude(  # TODO here delete DATASET + associated crops
                dticlustering__requested_on__gt=timezone.now()
                - timezone.timedelta(days=days_before)
            )
        )
        for d in old_datasets:
            d.zip_file.delete()

        cleared_data = {
            "cleared_clusterings": len(old_clusterings),
            "cleared_datasets": len(old_datasets),
        }

        # remove records
        old_clusterings.delete()
        old_datasets.delete()

        return cleared_data

    @classmethod
    def get_frontend_monitoring(cls):
        # TODO delete
        return cls.get_frontend_monitoring()

    @cached_property
    def expanded_results(self):
        """
        Returns a dict with all the result data
        """

        path = self.result_full_path
        if not path.exists():
            return {}

        result_dict = {}

        clusters_path = path / "clusters"
        prototypes_path = path / "prototypes"
        backgrounds_path = path / "backgrounds"

        # Cluster_by_path csv
        cluster_by_path_file = path / "cluster_by_path.csv"
        if cluster_by_path_file.exists():
            result_dict["csv_export_file"] = "cluster_by_path.csv"

        # Image data json
        image_data_file = path / "cluster_by_path.json"
        image_data = {}
        if image_data_file.exists():
            with open(image_data_file, "r") as f:
                image_data = json.load(f)

        # no proto
        if not prototypes_path.exists():
            result_dict["clusters"] = []
            return result_dict

        # List prototypes
        prototypes = {
            int(c.name[len("prototype") : -4])
            for c in prototypes_path.glob("prototype*")
            if c.suffix in [".jpg", ".png"]
        }

        result_dict["clusters"] = {}

        # List backgrounds
        result_dict["background_urls"] = [
            "backgrounds/{b.name}"
            for b in backgrounds_path.glob("background*")
            if b.suffix in [".jpg", ".png"]
        ]

        def try_and_get_url(*try_names):
            """
            For each name in try_names, returns (as a URL) the first one
            that exists (as a file), or None
            """
            for try_name in try_names:
                if (path / try_name).exists():
                    return f"{try_name}"

        # Iter clusters
        for p in sorted(prototypes):
            # Display the masked prototype if it exists, otherwise the original
            proto_url = try_and_get_url(
                f"masked_prototypes/prototype{p}.png",
                f"masked_prototypes/prototype{p}.jpg",
                f"prototypes/prototype{p}.png",
                f"prototypes/prototype{p}.jpg",
            )

            cluster = {
                "proto_url": proto_url,
                "id": p,
                "name": f"Cluster {p}",
                "images": [],
            }
            result_dict["clusters"][p] = cluster

            # add mask
            cluster["mask_url"] = try_and_get_url(
                f"masks/mask{p}.png",
                f"masks/mask{p}.jpg",
            )

            cluster_dir = clusters_path / f"cluster{p}"
            if not cluster_dir.exists():
                continue

            for img in cluster_dir.glob("*_raw.*"):
                if img.suffix not in [".jpg", ".png"]:
                    continue
                img_id = int(img.stem[: -len("_raw")])
                img_data = {
                    "raw_url": f"clusters/cluster{p}/{img.name}",
                    "tsf_url": f"clusters/cluster{p}/{img_id}_tsf{img.suffix}",
                    "path": None,
                    "distance": 100.0,
                    "id": img_id,
                }
                if str(img_id) in image_data:
                    img_ext_data = image_data[str(img_id)]
                    assert img_ext_data["cluster_id"] == p
                    img_data["path"] = img_ext_data["path"]
                    img_data["distance"] = img_ext_data["distance"]

                cluster["images"].append(img_data)

        return result_dict


class SavedClustering(models.Model):
    """
    Model for saving clustering modifications made by user
    """

    from_task = models.ForeignKey(
        DTIClustering, on_delete=models.CASCADE, related_name="saved_clustering"
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(
        max_length=64,
        default="dti",
        blank=True,
        verbose_name="Clustering name",
        help_text="An optional name to identify this clustering",
    )
    date = models.DateTimeField(auto_now=True, editable=False)
    clustering_data = models.JSONField(null=True)

    class Meta:
        ordering = ["-date"]
        verbose_name = "Manual clustering"

    def get_absolute_url(self) -> str:
        return reverse(
            "dticlustering:saved",
            kwargs={"pk": self.pk, "from_pk": self.from_task_id},  # self.from_task_id}
        )

    def format_as_csv(self) -> str:
        """
        Returns a CSV string with the clustering data
        """
        output = io.StringIO()
        writer = csv.writer(output)

        writer.writerow(["image_id", "image_path", "cluster_id", "cluster_name"])

        for cluster_id, cluster in self.clustering_data["clusters"].items():
            for img in cluster["images"]:
                writer.writerow([img["id"], img["path"], cluster_id, cluster["name"]])

        return output.getvalue()

    # TODO do we need a pre_delete method for SavedClustering
