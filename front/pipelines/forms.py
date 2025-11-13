from django import forms

from tasking.forms import AbstractTaskOnDatasetForm


class AbstractPipelineOnDatasetForm(AbstractTaskOnDatasetForm):
    class Meta(AbstractTaskOnDatasetForm.Meta):
        fields = AbstractTaskOnDatasetForm.Meta.fields
