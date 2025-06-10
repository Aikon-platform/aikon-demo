from django import forms
from django.db.models import Q
from django.core.exceptions import ValidationError

from .models import Regions
from tasking.forms import AbstractTaskOnDatasetForm


class RegionsForm(AbstractTaskOnDatasetForm):
    class Meta(AbstractTaskOnDatasetForm.Meta):
        model = Regions
        fields = AbstractTaskOnDatasetForm.Meta.fields + ("model",)

    #TODO implement `clean` to check if dataset field (inherited from `AbstractTaskOnDatasetForm` aldready has a line extraction, if we're doing char extraction)
    model = forms.ChoiceField(
        label="Model",
        help_text="Model used to extract image regions in the dataset",
        choices=[],  # dynamically set in __init__
        widget=forms.RadioSelect,
        required=True,
    )

    postprocess = forms.ChoiceField(
        choices=[
            ("", "No postprocessing"),
            ("watermarks", "Squarify and add 5% margin to crops"),
            ("character_line_extraction", r"Add 10% horizontal margin and 30% vertical margin")
        ],
        required=False
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["model"].choices = Regions.get_available_models()


    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.parameters = {
            "model": self.cleaned_data["model"],
            "postprocess": self.cleaned_data.get("postprocess", "")
        }
        if commit:
            instance.save()
        return instance
