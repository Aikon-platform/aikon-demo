from django import forms

from .models import Alignment
from tasking.forms import AbstractTaskOnCropsForm

# Available alignment methods - will be fetched from API if available
AVAILABLE_ALIGNMENT_METHODS = [
    ("sift+ransac", "Alignment using SIFT feature matching with RANSAC refinement")
]


class AlignmentForm(AbstractTaskOnCropsForm):
    """Form for creating alignment analysis tasks."""

    class Meta(AbstractTaskOnCropsForm.Meta):
        model = Alignment
        fields = AbstractTaskOnCropsForm.Meta.fields + ("method",)

    method = forms.ChoiceField(
        label="Alignment Method",
        help_text="Select the method to use for image alignment",
        widget=forms.Select(attrs={"extra-class": "preprocessing-field"}),
        choices=AVAILABLE_ALIGNMENT_METHODS,
        default=AVAILABLE_ALIGNMENT_METHODS[0][0],
    )

    def save(self, commit=True):
        instance = super().save(commit=False)
        
        parameters = {
            "method": self.cleaned_data.get("method", "sift+ransac"),
        }
        
        instance.parameters = parameters

        if commit:
            instance.save()

        return instance