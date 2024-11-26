# Generated by Django 4.2.16 on 2024-11-25 13:29

import datasets.fields
import datasets.utils
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CropList",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Dataset",
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
                        default="dataset",
                        help_text="An optional name to identify this dataset",
                        max_length=64,
                        verbose_name="Dataset name",
                    ),
                ),
                ("created_on", models.DateTimeField(auto_now_add=True)),
                (
                    "zip_file",
                    models.FileField(
                        max_length=500,
                        null=True,
                        upload_to=datasets.utils.PathAndRename("datasets/"),
                    ),
                ),
                (
                    "iiif_manifests",
                    datasets.fields.URLListModelField(
                        blank=True,
                        help_text="The URLs to the IIIF manifests of the dataset",
                        null=True,
                        verbose_name="IIIF Manifest URLs",
                    ),
                ),
                (
                    "pdf_file",
                    models.FileField(
                        max_length=500,
                        null=True,
                        upload_to=datasets.utils.PathAndRename("datasets/"),
                    ),
                ),
                (
                    "api_url",
                    models.URLField(
                        blank=True,
                        help_text="The URL where the dataset can be accessed through the API",
                        null=True,
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="ZippedDataset",
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
                        default="dataset",
                        help_text="An optional name to identify this dataset",
                        max_length=64,
                        verbose_name="Dataset name",
                    ),
                ),
                ("created_on", models.DateTimeField(auto_now_add=True)),
                (
                    "zip_file",
                    models.FileField(
                        max_length=500,
                        upload_to=datasets.utils.PathAndRename("datasets/"),
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
