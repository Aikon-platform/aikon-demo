from django.urls import path
from .views import *

app_name = "search"

urlpatterns = [
    path("indexing", IndexingMixin.List.as_view(), name="indexing_list"),
    path("indexing/start", IndexingMixin.Start.as_view(), name="indexing_start"),
    path("indexing/<uuid:pk>", IndexingMixin.Status.as_view(), name="indexing_status"),
    path("indexing/<uuid:pk>/progress", IndexingMixin.Progress.as_view(), name="indexing_progress"),
    path("indexing/<uuid:pk>/cancel", IndexingMixin.Cancel.as_view(), name="indexing_cancel"),
    path("indexing/<uuid:pk>/watch", IndexingMixin.Watcher.as_view(), name="indexing_notify"),
    path("indexing/<uuid:pk>/restart", IndexingMixin.Restart.as_view(), name="indexing_restart"),
    path("indexing/<uuid:pk>/delete", IndexingMixin.Delete.as_view(), name="indexing_delete"),

    path("query", QueryMixin.List.as_view(), name="query_list"),
    path("query/start", QueryMixin.Start.as_view(), name="query_start"),
    path("query/<uuid:pk>", QueryMixin.Status.as_view(), name="query_status"),
    path("query/<uuid:pk>/progress", QueryMixin.Progress.as_view(), name="query_progress"),
    path("query/<uuid:pk>/cancel", QueryMixin.Cancel.as_view(), name="query_cancel"),
    path("query/<uuid:pk>/watch", QueryMixin.Watcher.as_view(), name="query_notify"),
    path("query/<uuid:pk>/restart", QueryMixin.Restart.as_view(), name="query_restart"),
    path("query/<uuid:pk>/delete", QueryMixin.Delete.as_view(), name="query_delete"),

    # Admin views
    path(
        "dataset/<uuid:dataset_pk>",
        IndexingMixin.ByDatasetList.as_view(),
        name="list_perdataset",
    ),
    path("monitor", IndexingMixin.Monitor.as_view(), name="monitor"),
    path(
        "monitor/clear/front",
        IndexingMixin.ClearOld.as_view(),
        name="monitor_clear_front",
    ),
    path(
        "monitor/clear/api",
        IndexingMixin.ClearAPIOld.as_view(),
        name="monitor_clear_api",
    ),
]