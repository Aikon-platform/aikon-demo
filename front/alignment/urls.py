from django.urls import path
from .views import *

app_name = "alignment"

urlpatterns = [
    path("", AlignmentMixin.List.as_view(), name="list"),
    path("start", AlignmentStart.as_view(), name="start"),
    path("<uuid:pk>", AlignmentMixin.Status.as_view(), name="status"),
    path("<uuid:pk>/progress", AlignmentMixin.Progress.as_view(), name="progress"),
    path("<uuid:pk>/cancel", AlignmentMixin.Cancel.as_view(), name="cancel"),
    path("<uuid:pk>/watch", AlignmentMixin.Watcher.as_view(), name="notify"),
    path("<uuid:pk>/restart", AlignmentStartFrom.as_view(), name="restart"),
    path("<uuid:pk>/delete", AlignmentMixin.Delete.as_view(), name="delete"),
    # Admin views
    path(
        "dataset/<uuid:dataset_pk>",
        AlignmentMixin.ByDatasetList.as_view(),
        name="list_perdataset",
    ),
    path("monitor", AlignmentMixin.Monitor.as_view(), name="monitor"),
    path(
        "monitor/clear/front",
        AlignmentMixin.ClearOld.as_view(),
        name="monitor_clear_front",
    ),
    path(
        "monitor/clear/api",
        AlignmentMixin.ClearAPIOld.as_view(),
        name="monitor_clear_api",
    ),
    path(
        "<uuid:pk>/download/results",
        AlignmentDownloadJson.as_view(),
        name="download_json",
    ),
]