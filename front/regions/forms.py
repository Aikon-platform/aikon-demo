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

    postprocess_watermarks = forms.BooleanField(
        label="Squarify and add 5% margin to crops",
        required=False,
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["model"].choices = Regions.get_available_models()


    def clean(self):
        """when attempting to run a character extraction, assert that a successful line extraction has previously been run"""
        cleaned_data = super().clean()
        model = cleaned_data.get("model", None)
        dataset = cleaned_data.get("dataset", None)
        id_dataset = dataset.id if dataset is not None else None

        if model == "character_line_extraction":
            #NOTE about the `parameters__icontains`: in Django SQLite, JSON filtering operations
            # are not supported, so the JSON filtering `jsonfield__contains=<dict>` does not work. so,
            # we use string filtering: `__icontains` to ensure that we have a successful line_extraction.
            q = Regions.objects.filter(
                Q(dataset=id_dataset)
                & Q(parameters__icontains='"line_extraction"')  # double quotes to ensure we filter by the entire model name
                & Q(status="SUCCESS")
            )
            if not q.exists():
                raise ValidationError("A successful line extraction needs to be run before performing a character extraction.")
        return


    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.parameters = {"model": self.cleaned_data["model"]}
        if self.cleaned_data.get("postprocess_watermarks"):
            instance.parameters["postprocess"] = "watermarks"

        if commit:
            instance.save()
        return instance
