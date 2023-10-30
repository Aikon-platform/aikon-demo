# Generated by Django 4.2.6 on 2023-10-30 09:36

import datasets.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datasets', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zippeddataset',
            name='zip_file',
            field=models.FileField(max_length=500, upload_to=datasets.models.PathAndRename('datasets/')),
        ),
    ]
