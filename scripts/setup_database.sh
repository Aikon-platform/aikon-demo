#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$SCRIPT_DIR/utils.sh"

echo_title "INITIALIZE DATABASE"

cd "$FRONT_DIR"
manage="uv run --directory=$FRONT_DIR $FRONT_DIR/manage.py"

if [ -f "$FRONT_DIR"/db.sqlite3 ]; then
    rm "$FRONT_DIR"/db.sqlite3
fi

. "$FRONT_DIR"/.env
$manage migrate

# NOTE: don't change indentation !
create_superuser() {
echo "from django.contrib.auth import get_user_model;
User = get_user_model();
username = '$ADMIN_NAME';
if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username, '$ADMIN_EMAIL', '$POSTGRES_PASSWORD');
    print(f'Superuser named {username} created.');
" | $manage shell
}

# color_echo yellow "\nCreating superuser\nusername: $ADMIN_NAME\nemail: $ADMIN_EMAIL\npassword: $POSTGRES_PASSWORD"
create_superuser
# echo "from django.contrib.auth.models import User; User.objects.create_superuser('$ADMIN_NAME', '$ADMIN_EMAIL', '$POSTGRES_PASSWORD')" | $manage shell

color_echo blue '\nConnect to app using:'
echo -e "          👤 $ADMIN_NAME"
echo -e "          🔑 $POSTGRES_PASSWORD"
