from django import forms

from .models import Alignment
from dticlustering.forms import DTIParametersForm
from tasking.forms import AbstractTaskOnCropsForm


AVAILABLE_ALIGNMENT_METHODS = [
    ("ransac", "RANSAC based on feature matching"),
    ("dti", "DTI prototype learning"),
]

AVAILABLE_TRANSFORMS = [
    ("scale", "Scale"),
    ("scalexy", "Scale (non-uniform)"),
    ("scale+rotate", "Scale and Rotate"),
    ("scalexy+rotate", "Scale (non-uniform) and Rotate"),
    ("affine", "Affine"),
    ("homographic", "Homographic"),
]


def validate_dti_transforms(value):
    # alignment results are built from a single affine or projective matrix (see dti.py)
    transforms = value.get("transforms", "").split("_")
    if len({"affine", "projective"} & set(transforms)) != 1:
        raise forms.ValidationError(
            "DTI alignment requires an affine or projective spatial transform"
        )


class DTIAlignmentForm(DTIParametersForm):
    """
    DTI clustering settings with a single prototype, the alignment reference
    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        transforms = self.fields["transformation_sequence"]
        transforms.initial = {
            **transforms.initial,
            "transforms": "identity_affine",
            "iterations": 2000,
            "milestones": [1000],
        }
        transforms.validators.append(validate_dti_transforms)

        background = self.fields["background_option"]
        background.initial = {**background.initial, "init": ["sample"]}  # mean


# Subform of the method-specific settings, its fields are prefixed with "<method>_"
METHOD_FORMS = {
    "dti": DTIAlignmentForm,
}


class AlignmentForm(AbstractTaskOnCropsForm):
    """Form for creating alignment analysis tasks."""

    class Meta(AbstractTaskOnCropsForm.Meta):
        model = Alignment
        fields = AbstractTaskOnCropsForm.Meta.fields + ("ransac_feature",)

    method = forms.ChoiceField(
        label="Alignment Method",
        help_text="Select the method to use for image alignment",
        widget=forms.Select(attrs={"extra-class": "preprocessing-field"}),
        choices=AVAILABLE_ALIGNMENT_METHODS,
        initial=AVAILABLE_ALIGNMENT_METHODS[0][0],
    )

    ransac_feature = forms.ChoiceField(
        label="Feature",
        help_text="Features matched by RANSAC: SIFT or a feature extraction model",
        widget=forms.Select(attrs={"extra-class": "preprocessing-field"}),
    )

    target_transform = forms.ChoiceField(
        label="Target Transform",
        help_text="Select the target transform to use for image alignment",
        widget=forms.Select(attrs={"extra-class": "preprocessing-field"}),
        choices=AVAILABLE_TRANSFORMS,
        initial=AVAILABLE_TRANSFORMS[0][0],
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["ransac_feature"].choices = Alignment.get_available_models()

        for method, form_class in METHOD_FORMS.items():
            for field_name, field in form_class().fields.items():
                self.fields[f"{method}_{field_name}"] = field

    def clean(self):
        cleaned_data = super().clean()
        # the settings of the other methods are not used
        for method, form_class in METHOD_FORMS.items():
            if method != cleaned_data.get("method"):
                for field_name in form_class.base_fields:
                    self._errors.pop(f"{method}_{field_name}", None)
        return cleaned_data

    def save(self, commit=True):
        instance = super().save(commit=False)
        method = self.cleaned_data.get("method", "ransac")

        parameters = {"method": method}
        if method == "ransac":
            parameters.update(
                {
                    "ransac_feature": self.cleaned_data.get("ransac_feature", "SIFT"),
                    "target_transform": self.cleaned_data.get(
                        "target_transform", "homographic"
                    ),
                }
            )
        if method in METHOD_FORMS:
            parameters[f"{method}_parameters"] = {
                field_name: self.cleaned_data[f"{method}_{field_name}"]
                for field_name in METHOD_FORMS[method].base_fields
            }

        instance.parameters = parameters

        if commit:
            instance.save()

        return instance
