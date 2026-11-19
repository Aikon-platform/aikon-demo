from pathlib import Path

from django.apps import apps
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from django.views.generic import TemplateView


urlpatterns = [
    path("", include("shared.urls")),
    path("admin/", admin.site.urls),
    path("accounts/", include("django.contrib.auth.urls")),
    # TODO make the following apps optional (set in .env)
    path("dti/", include("dticlustering.urls")),
    path("similarity/", include("similarity.urls")),
    path("alignment/", include("alignment.urls")),
    path("regions/", include("regions.urls")),
    path("search/", include("search.urls")),
    path("watermarks/", include("watermarks.urls")),
    path("datasets/", include("datasets.urls")),
    # path("watermarks/", include("pipelines.urls")),
]


def project_app_configs():
    """return only the apps that live inside this project, not django.contrib or third-party apps."""
    base = str(settings.BASE_DIR)
    return [cfg for cfg in apps.get_app_configs() if cfg.path.startswith(base)]


# generate about views for each task.
# for each of our app, if an "about" template exists at `$app_name/templates/$app_name/about.html`,
# add :
# - a template view for this `about.html`
# - an URL at $app_name/about
# context variables for the about templates MUST be passed through `TemplateView.extra_context`
for cfg in project_app_configs():
    about_template = Path(cfg.path) / "templates" / cfg.name / "about.html"
    print("###", cfg.name, cfg.label)
    if cfg.name in settings.DEMO_APPS and about_template.is_file():
        urlpatterns.append(
            path(
                f"{cfg.label}/about",
                TemplateView.as_view(
                    template_name=f"{cfg.name}/about.html",
                    extra_context={
                        "app_label": cfg.label,
                        "app_name": cfg.verbose_name,
                    },
                ),
                name=f"{cfg.label}_about",
            )
        )

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
