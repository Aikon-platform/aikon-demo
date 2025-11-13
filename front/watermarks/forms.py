from pipelines.forms import AbstractPipelineOnDatasetForm
from django import forms
from search.forms import IndexRadioSelect
from search.models import Index
from .models import WATERMARKS_FEAT_NET, WatermarksPipeline

class WatermarksPipelineForm(AbstractPipelineOnDatasetForm):
    class Meta(AbstractPipelineOnDatasetForm.Meta):
        model = WatermarksPipeline
        fields = AbstractPipelineOnDatasetForm.Meta.fields + (
            "analysis_type", "need_regions", "query_target_index")

    query_target_index = forms.ModelChoiceField(
        queryset=Index.objects.filter(public=True),
        label="Index",
        help_text="Select the index to query",
        widget=IndexRadioSelect(),
        required=False,
    )

    def __init__(self, *args, **kwargs):
        selected_index = kwargs.pop("query_target_index", None)
        analysis_type = kwargs.pop("analysis_type", None)
        super().__init__(*args, **kwargs)
        query_index_queryset = Index.available_indexes(self._user).filter(feat_net=WATERMARKS_FEAT_NET)
        self.fields["query_target_index"].queryset = query_index_queryset
        self.fields["query_target_index"].initial = selected_index
        self.fields["analysis_type"].initial = analysis_type or ""
