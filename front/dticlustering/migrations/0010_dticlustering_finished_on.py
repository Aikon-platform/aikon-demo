# Generated by Django 4.2.18 on 2025-02-04 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dticlustering', '0009_dticlustering_pipeline'),
    ]

    operations = [
        migrations.AddField(
            model_name='dticlustering',
            name='finished_on',
            field=models.DateTimeField(blank=True, editable=False, null=True),
        ),
    ]
