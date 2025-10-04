from django.db.models import Q
from .models import Indexing, Query, Index
from tasking.forms import AbstractTaskOnCropsForm
from django import forms

class IndexingForm(AbstractTaskOnCropsForm):
    """Form for creating indexing tasks."""

    class Meta(AbstractTaskOnCropsForm.Meta):
        model = Indexing
        fields = AbstractTaskOnCropsForm.Meta.fields + ("feat_net",)

    feat_net = forms.ChoiceField(
        label="Feature Extraction Model",
        help_text="Select the model to use for feature extraction",
        widget=forms.Select(attrs={"extra-class": "preprocessing-field"}),
    )

    use_transpositions = forms.BooleanField(
        required=False,
        initial=False,
        label="Use Transpositions",
        help_text="Include transposed images in similarity computation",
        widget=forms.CheckboxInput(attrs={"extra-class": "preprocessing-field"}),
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["feat_net"].choices = Indexing.get_available_models()

    def save(self, commit=True):
        instance = super().save(commit=False)

        parameters = {
            "feat_net": self.cleaned_data["feat_net"],
            "transpositions": ["none"] if not self.cleaned_data["use_transpositions"] else ["none", "hflip"]
        }
        instance.parameters = parameters

        if commit:
            instance.save()

        return instance

class QueryForm(AbstractTaskOnCropsForm):
    """Form for creating query tasks."""

    class Meta(AbstractTaskOnCropsForm.Meta):
        model = Query
        fields = AbstractTaskOnCropsForm.Meta.fields + ("index",)
    
    index = forms.ModelChoiceField(
        queryset=Index.objects.filter(public=True),
        label="Index",
        help_text="Select the index to query",
        widget=forms.Select(attrs={"extra-class": "preprocessing-field"}),
    )

    def __init__(self, *args, **kwargs):
        selected_index = kwargs.pop("index", None)
        super().__init__(*args, **kwargs)
        self.fields["index"].queryset = Index.objects.filter(
            Q(public=True) | Q(owner=self._user)
        )
        self.fields["index"].initial = selected_index