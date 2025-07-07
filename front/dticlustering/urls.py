from django.urls import path
from .views import *

app_name = "dticlustering"

urlpatterns = [
    path("", DTIClusteringMixin.List.as_view(), name="list"),
    path("start", DTIClusteringStart.as_view(), name="start"),
    path("<uuid:pk>", DTIClusteringMixin.Status.as_view(), name="status"),
    path("<uuid:pk>/progress", DTIClusteringMixin.Progress.as_view(), name="progress"),
    path("<uuid:pk>/cancel", DTIClusteringMixin.Cancel.as_view(), name="cancel"),
    path("<uuid:pk>/watch", DTIClusteringMixin.Watcher.as_view(), name="notify"),
    path("<uuid:pk>/restart", DTIClusteringStartFrom.as_view(), name="restart"),
    path("<uuid:pk>/delete", DTIClusteringMixin.Delete.as_view(), name="delete"),
    path(
        "<uuid:from_pk>/saved/create",
        SavedClusteringFromDTI.as_view(),
        name="saved_create",
    ),
    path("<uuid:from_pk>/saved/<uuid:pk>", SavedClusteringEdit.as_view(), name="saved"),
    path(
        "<uuid:from_pk>/saved/<uuid:pk>/delete",
        SavedClusteringDelete.as_view(),
        name="saved_delete",
    ),
    path(
        "<uuid:from_pk>/saved/<uuid:pk>/export",
        SavedClusteringCSVExport.as_view(),
        name="saved_export",
    ),
    # Admin views
    path(
        "list/perdataset/<uuid:dataset_pk>",
        DTIClusteringMixin.ByDatasetList.as_view(),
        name="list_perdataset",
    ),
    path("monitor", DTIClusteringMonitoring.as_view(), name="monitor"),
    path(
        "monitor/clear/front", ClearOldClusterings.as_view(), name="monitor_clear_front"
    ),
    path(
        "monitor/clear/api", ClearAPIOldClusterings.as_view(), name="monitor_clear_api"
    ),
]
