import json

from django import forms

from .models import DTIClustering, SavedClustering
from tasking.forms import AbstractTaskOnDatasetForm


class IntegerListField(forms.CharField):
    def clean(self, value):
        # First, let the CharField do its normal validation.
        super().clean(value)

        # Split the input value by commas and strip any whitespace.
        values = [v.strip() for v in value.split(",")]

        # Validate that each value is an integer.
        for item in values:
            try:
                int(item)
            except (TypeError, ValueError):
                raise forms.ValidationError("All items must be integers.")

        return values


DTI_TRANSFORM_OPTIONS = [
    ("0_identity", "Identity"),
    ("1_color", "Color shift"),
    ("2_affine", "Affine deformation"),
    ("3_projective", "Projective deformation"),
    ("4_tps", "Thin plate spline"),
]

DTI_BACKGROUND_OPTIONS = [
    ("0_dti", "No background model"),
    ("1_learn_bg", "Learned background model"),
    ("2_const_bg", "Constant background model"),
    ("3_learn_fg", "Learned foreground model (transparency mask)"),
]


class TransformsField(forms.CharField):
    """
    Custom hidden form field for transform configuration that handles JSON data
    """

    def __init__(self, *args, **kwargs):
        kwargs["widget"] = forms.HiddenInput()
        kwargs["required"] = False
        super().__init__(*args, **kwargs)

    @staticmethod
    def to_python(value):
        """Convert JSON string to Python dict"""
        if not value:
            return {"transforms": "identity", "iterations": 1, "milestones": [1]}

        try:
            return json.loads(value)
        except (json.JSONDecodeError, TypeError):
            raise forms.ValidationError("Invalid transform configuration")

    @staticmethod
    def prepare_value(value):
        """Convert Python dict to JSON string for display"""
        if isinstance(value, dict):
            return json.dumps(value)
        return value or json.dumps(
            {"transforms": "identity", "iterations": 1, "milestones": [1]}
        )


class DTIClusteringForm(AbstractTaskOnDatasetForm):
    p_n_clusters = forms.IntegerField(
        label="Number of clusters",
        help_text="The number of groups to find in the dataset",
        min_value=1,
        max_value=50,
        initial=10,
        required=True,
    )
    p_background = forms.ChoiceField(
        label="Background",
        choices=DTI_BACKGROUND_OPTIONS,
        widget=forms.RadioSelect,
        required=True,
        initial="0_dti",
    )
    p_transforms = TransformsField(
        label="Transform Configuration",
        help_text="Image transformations to fit prototype",
    )
    p_batch_size = forms.IntegerField(
        label="Batch size",
        help_text="Number of samples used per iteration",
        min_value=16,
        max_value=64,
        initial=32,
        required=True,
    )

    class Meta(AbstractTaskOnDatasetForm.Meta):
        model = DTIClustering
        fieldsets = (
            (
                "Dataset",
                {
                    "fields": ["name", "dataset_zip", "dataset_name", "notify_email"],
                },
            ),
            (
                "Clustering Options",
                {"fields": ["p_n_clusters", "p_background", "p_transforms"]},
            ),
            # (
            #     "Extra Options",
            #     {
            #         "fields": [("p_n_epochs", "p_batch_size"), ("p_milestones", "p_curriculum")],
            #         "classes": ("collapse",),
            #     },
            # ),
        )

    def _populate_instance(self, instance):

        # TODO modify here to get transforms infos
        p_transforms = "_".join(
            [t.split("_")[1] for t in sorted(self.cleaned_data["p_transforms"])]
        )

        instance.parameters = {
            "n_prototypes": self.cleaned_data["p_n_clusters"],
            "background_option": self.cleaned_data["p_background"],
            "transformation_sequence": p_transforms,
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
