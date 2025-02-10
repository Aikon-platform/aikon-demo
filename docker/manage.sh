#!/bin/bash

set -e

source /home/aikon-demo/front/.env
source /home/aikon-demo/.env

manage="/home/aikon/venv/bin/python /home/aikon-demo/front/manage.py"

# wait 2sec for postgres to start
sleep 2

# TODO somehow not working
$manage collectstatic --noinput

$manage makemigrations
$manage migrate

# Create superuser if it doesn't exist
echo "
from django.contrib.auth import get_user_model;
User = get_user_model();
username = '$ADMIN_USER';
if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username, '$ADMIN_EMAIL', '$ADMIN_PSW');
    print('Superuser created.');
else:
    print('Superuser already exists.');
" | $manage shell
