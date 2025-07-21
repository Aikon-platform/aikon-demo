from django import forms

from shared.forms import HiddenJsonField
from .models import DTIClustering, SavedClustering
from tasking.forms import AbstractTaskOnDatasetForm


class DTIClusteringForm(AbstractTaskOnDatasetForm):
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
    p_transforms = HiddenJsonField(
        label="Transform Configuration",
        help_text="Image transformations to fit prototype",
        json_structure={
            "transforms": "identity",
            "iterations": 1000,
            "milestones": [1000],
            "grid_size": 4,  # thin plate spline grid size
        },
    )

    p_background = HiddenJsonField(
        label="Learned Prototypes",
        help_text="How parts of the images should be taken into account for prototype learning",
        json_structure={
            "use_sprites": False,  # Default to DTI (no sprites)
            "freeze": [False, False, False],  # foreground, background, masks
            "init": ["gaussian"],  # only one init for DTI
        },
    )

    class Meta(AbstractTaskOnDatasetForm.Meta):
        model = DTIClustering

    def _populate_instance(self, instance):
        instance.parameters = {
            "n_prototypes": self.cleaned_data["p_n_clusters"],
            "background_option": self.cleaned_data["p_background"],
            "transformation_sequence": self.cleaned_data["p_transforms"],
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
