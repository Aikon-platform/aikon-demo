from .models import Index, Query, Indexing
from tasking.views import task_view_set
from django.views.generic import TemplateView

from .forms import IndexingForm, QueryForm

@task_view_set
class IndexingMixin:
    """
    Mixin for Indexing views
    """
    model = Indexing
    form_class = IndexingForm
    task_name = "Dataset Indexing"
    app_name = "search"
    task_data = "dataset"

    
@task_view_set
class QueryMixin:
    """
    Mixin for Search views
    """
    model = Query
    form_class = QueryForm
    task_name = "Search in index"
    app_name = "search"
    task_data = "dataset"

class SearchQueryStartView(QueryMixin.Start):
    def get_form_kwargs(self):
        kwargs = super().get_form_kwargs()
        if "index" in self.request.GET:
            kwargs["target_index"] = self.request.GET["index"]
        return kwargs

class SearchHomeView(TemplateView):
    template_name = "search/home.html"