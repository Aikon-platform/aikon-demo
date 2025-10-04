from .models import Index, Query, Indexing
from tasking.views import task_view_set

from .forms import IndexingForm, QueryForm

@task_view_set
class IndexingMixin:
    """
    Mixin for Indexing views
    """
    model = Indexing
    task_name = "Dataset Indexing"
    app_name = "search"
    task_data = "dataset"
    task_specific_prefix = "indexing_"
    
@task_view_set
class QueryMixin:
    """
    Mixin for Search views
    """
    model = Query
    task_name = "Search in index"
    app_name = "search"
    task_data = "dataset"
    task_specific_prefix = "query_"