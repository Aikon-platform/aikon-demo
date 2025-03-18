#!/bin/bash

set -e

source /home/aikondemo/.env

manage="/home/aikondemo/venv/bin/python /home/aikondemo/manage.py"

# wait 2sec for postgres to start
sleep 2

$manage collectstatic --noinput

$manage makemigrations
$manage migrate

# Create superuser if it doesn't exist
echo "
from django.contrib.auth import get_user_model;
User = get_user_model();
username = '$ADMIN_NAME';
if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username, '$ADMIN_EMAIL', '$POSTGRES_PASSWORD');
    print('Superuser created.');
else:
    print('Superuser already exists.');
" | $manage shell

echo '\nConnect to app using:'
echo -e "          👤 $ADMIN_NAME"
echo -e "          🔑 $POSTGRES_PASSWORD"
