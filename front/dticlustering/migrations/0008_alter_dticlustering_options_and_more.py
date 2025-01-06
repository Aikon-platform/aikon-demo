# Generated by Django 4.2.16 on 2025-01-06 10:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("datasets", "0005_delete_zippeddataset_remove_dataset_format_and_more"),
        ("dticlustering", "0007_rename_from_dti_savedclustering_from_task"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="dticlustering",
            options={"verbose_name": "DTI Clustering"},
        ),
        migrations.AlterField(
            model_name="dticlustering",
            name="dataset",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="dticlustering_tasks",
                to="datasets.dataset",
                verbose_name="Use existing dataset...",
            ),
        ),
        migrations.AlterField(
            model_name="dticlustering",
            name="name",
            field=models.CharField(
                blank=True,
                help_text="Optional name to identify this dticlustering experiment",
                max_length=64,
                verbose_name="Experiment name",
            ),
        ),
        migrations.AlterField(
            model_name="dticlustering",
            name="notify_email",
            field=models.BooleanField(
                blank=True,
                default=True,
                help_text="Send an email when the dticlustering task is finished",
                verbose_name="Notify by email",
            ),
        ),
    ]
