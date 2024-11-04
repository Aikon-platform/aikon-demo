from typing import Any

from django.views.generic import (
    DetailView,
    ListView,
    CreateView,
    UpdateView,
    DeleteView,
    View,
    TemplateView,
)
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin

from .forms import RegionsForm
from .models import Regions
from tasking.views import *


class RegionsMixin:
    """
    Mixin for Regions extractions views
    """

    model = Regions
    form_class = RegionsForm
    task_name = "Regions Extraction"
    app_name = "regions"


class RegionsStart(RegionsMixin, TaskStartView):
    pass


class RegionsStartFrom(RegionsMixin, TaskStartFromView):
    pass


class RegionsList(RegionsMixin, TaskListView):
    # permission_see_all = "dticlustering.monitor_dticlustering"

    def get_queryset(self):
        return super().get_queryset().prefetch_related("dataset")


class RegionsMonitor(RegionsMixin, TaskMonitoringView):
    """
    Monitoring view
    """

    permission_required = "regions.monitor_regions"


class RegionsStatus(RegionsMixin, TaskStatusView):
    pass


class RegionsProgress(RegionsMixin, TaskProgressView):
    pass


class RegionsCancel(RegionsMixin, TaskCancelView):
    pass


class RegionsWatcher(RegionsMixin, TaskWatcherView):
    pass


class RegionsDelete(RegionsMixin, TaskDeleteView):
    pass


class RegionsByDatasetList(RegionsMixin, TaskByDatasetList):
    pass


class ClearOldRegions(RegionsMixin, ClearOldResultsView):
    pass


class ClearAPIOldRegions(RegionsMixin, ClearAPIOldResultsView):
    pass
