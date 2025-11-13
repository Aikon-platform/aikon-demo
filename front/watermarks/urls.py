from django.urls import path
from .views import *

app_name = "watermarks"

urlpatterns = [
    path("", WatermarksList.as_view(), name="list"),
    path("start", WatermarksStartView.as_view(), name="start"),
    path("<uuid:pk>", WatermarksStatusView.as_view(), name="status"),
    path("<uuid:pk>/progress", WatermarksMixin.Progress.as_view(), name="progress"),
    path("<uuid:pk>/cancel", WatermarksMixin.Cancel.as_view(), name="cancel"),
    path("<uuid:pk>/watch", WatermarksMixin.Watcher.as_view(), name="notify"),
    path("<uuid:pk>/restart", WatermarksStartFromView.as_view(), name="restart"),
    path("<uuid:pk>/delete", WatermarksMixin.Delete.as_view(), name="delete"),
    # Admin views
    path(
        "dataset/<uuid:dataset_pk>",
        WatermarksMixin.ByDatasetList.as_view(),
        name="list_perdataset",
    ),
    path("monitor", WatermarksMixin.Monitor.as_view(), name="monitor"),
    path(
        "monitor/clear/front",
        WatermarksMixin.ClearOld.as_view(),
        name="monitor_clear_front",
    ),
]
