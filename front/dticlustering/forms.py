from django import forms

from shared.forms import HiddenJsonField
from .models import DTIClustering, SavedClustering
from tasking.forms import AbstractTaskOnCropsForm

LEARNING_RATE_CHOICES = [
    (1e-5, "0.00001 (Minimum)"),
    (5e-5, "0.00005 (Very Slow)"),
    (1e-4, "0.0001 (Slow)"),
    (5e-4, "0.0005 (Default)"),
    (1e-3, "0.001 (Medium)"),
    (5e-3, "0.005 (Fast)"),
    (1e-2, "0.01 (Very Fast)"),
]

LEARNING_SOURCE_CHOICES = [
    ("data", "Direct Pixel Learning"),
    ("mlp", "MLP Generator (Latent Space)"),
    ("unet", "UNet Generator (Latent Space)"),
]


class DTIParametersForm(forms.Form):
    """
    DTI training settings, shared with DTI alignment
    (field names are the DTI parameter names)
    """

    lr = forms.TypedChoiceField(
        label="Learning Rate",
        help_text="How fast the prototypes adapt: higher values learn faster but may be unstable.",
        choices=LEARNING_RATE_CHOICES,
        coerce=float,
        initial=5e-4,
    )
    source = forms.ChoiceField(
        label="Sprite Generation Method",
        help_text="How sprites are learned: direct pixel optimization or neural network generation from latent vectors.",
        choices=LEARNING_SOURCE_CHOICES,
        initial="data",
    )
    transformation_sequence = HiddenJsonField(
        label="Transform Configuration",
        help_text="Image transformations to fit prototype",
        json_structure={
            "transforms": "identity",
            "iterations": 1000,
            "milestones": [1000],
            "grid_size": 4,  # thin plate spline grid size
        },
    )
    background_option = HiddenJsonField(
        label="Learned Prototypes",
        help_text="How parts of the images should be taken into account for prototype learning",
        json_structure={
            "use_sprites": False,  # Default to DTI (no sprites)
            "freeze": [False, False, False],  # foreground, background, masks
            "init": ["gaussian"],  # only one init for DTI
        },
    )

    def get_dti_parameters(self):
        return {name: self.cleaned_data[name] for name in DTIParametersForm.base_fields}


class DTIClusteringForm(AbstractTaskOnCropsForm, DTIParametersForm):
    p_n_clusters = forms.IntegerField(
        label="Number of clusters",
        help_text="The number of different prototypes to generate from the dataset",
        min_value=1,
        max_value=50,
        initial=10,
        required=True,
    )
    # p_batch_size = forms.IntegerField(
    #     label="Batch size",
    #     help_text="Number of samples used per iteration",
    #     min_value=16,
    #     max_value=64,
    #     initial=64,
    #     required=True,
    # )
    empty_cluster_thres = forms.FloatField(
        label="Threshold for empty clusters",
        help_text="When a cluster falls below threshold, its samples are reassigned",
        min_value=0.001,
        max_value=0.6,
        initial=0.025,
        required=True,
    )

    class Meta(AbstractTaskOnCropsForm.Meta):
        model = DTIClustering

    def _populate_instance(self, instance):
        instance.parameters = {
            "n_prototypes": self.cleaned_data["p_n_clusters"],
            # "batch_size": self.cleaned_data["p_batch_size"],
            "empty_cluster_threshold": self.cleaned_data["empty_cluster_thres"],
            **self.get_dti_parameters(),
        }

        super()._populate_instance(instance)


class SavedClusteringForm(forms.ModelForm):
    class Meta:
        model = SavedClustering
        fields = (
            "name",
            "clustering_data",
        )
        widgets = {"clustering_data": forms.HiddenInput()}

    def __init__(self, *args, **kwargs):
        self.__from_task = kwargs.pop("from_task", None)

        super().__init__(*args, **kwargs)

        if self.__from_task:
            self.fields["name"].initial = self.__from_task.name

    def save(self, commit=True):
        instance = super().save(commit=False)

        if self.__from_task:
            instance.from_task = self.__from_task

        if commit:
            instance.save()

        return instance
