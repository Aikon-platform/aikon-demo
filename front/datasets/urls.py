from django.urls import path
from .views import *

app_name = "datasets"

urlpatterns = [
    path("", DatasetListView.as_view(), name="list"),
    path("<uuid:pk>/view", DatasetMainView.as_view(), name="view"),
    path("<uuid:pk>/delete", DatasetDeleteView.as_view(), name="delete"),
]
