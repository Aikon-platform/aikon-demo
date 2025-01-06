# Generated by Django 4.2.16 on 2025-01-06 10:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("datasets", "0005_delete_zippeddataset_remove_dataset_format_and_more"),
        ("regions", "0003_regions_regions"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="regions",
            name="model",
        ),
        migrations.AlterField(
            model_name="regions",
            name="dataset",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="regions_tasks",
                to="datasets.dataset",
                verbose_name="Use existing dataset...",
            ),
        ),
    ]
