# Generated by Django 4.2.16 on 2024-11-25 13:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("datasets", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Regions",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        blank=True,
                        help_text="Optional name to identify this regions experiment",
                        max_length=64,
                        verbose_name="Experiment name",
                    ),
                ),
                (
                    "notify_email",
                    models.BooleanField(
                        blank=True,
                        default=True,
                        help_text="Send an email when the regions task is finished",
                        verbose_name="Notify by email",
                    ),
                ),
                (
                    "status",
                    models.CharField(default="PENDING", editable=False, max_length=20),
                ),
                ("is_finished", models.BooleanField(default=False, editable=False)),
                ("requested_on", models.DateTimeField(auto_now_add=True)),
                ("api_tracking_id", models.UUIDField(editable=False, null=True)),
                ("parameters", models.JSONField(null=True)),
                ("regions", models.JSONField(blank=True, null=True)),
                (
                    "dataset",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="datasets.dataset",
                    ),
                ),
                (
                    "requested_by",
                    models.ForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "Regions Extraction",
            },
        ),
    ]
