DOCKER_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
FRONT_ROOT="$(dirname "$DOCKER_DIR")"

# TODO add more echo and interactivity to let the user know what is happening

source "$FRONT_ROOT"/scripts/utils.sh

# if ../front/.env does not exist, create it
if [ ! -f "$FRONT_ROOT"/front/.env ]; then
    echo_title "SET UP FRONT ENV VARIABLES"
    cp "$FRONT_ROOT"/front/.env.template "$FRONT_ROOT"/front/.env
    update_env "$FRONT_ROOT"/front/.env
fi

# if docker/.env does not exist, create it
if [ ! -f "$FRONT_ROOT"/docker/.env ]; then
    echo_title "SET UP DOCKER ENV VARIABLES"
    cp "$FRONT_ROOT"/docker/.env.template "$FRONT_ROOT"/docker/.env
    update_env "$FRONT_ROOT"/docker/.env
fi

source "$FRONT_ROOT"/front/.env
source "$FRONT_ROOT"/docker/.env

# if $DATA_FOLDER does not exist
if [ ! -d "$DATA_FOLDER" ]; then
    echo_title "CREATE DATA FOLDER INSIDE $DATA_FOLDER"
    # Create $DATA_FOLDER folder with right permissions for user $USERID
    sudo mkdir -p "$DATA_FOLDER"
    sudo chown -R "$USERID:$USERID" "$DATA_FOLDER"
    sudo chmod -R 775 "$DATA_FOLDER"
fi

# if nginx_conf does not exist, create it
if [ ! -f "$FRONT_ROOT"/docker/nginx_conf ]; then
    echo_title "GENERATING INTERNAL DOCKER NGINX CONFIG"

    cp "$FRONT_ROOT"/docker/nginx.conf.template "$FRONT_ROOT"/docker/nginx_conf

    sed -i -e "s~DJANGO_PORT~$DJANGO_PORT~" "$FRONT_ROOT"/docker/nginx_conf
    sed -i -e "s~NGINX_PORT~$NGINX_PORT~" "$FRONT_ROOT"/docker/nginx_conf
    sed -i -e "s~PROD_URL~$PROD_URL~" "$FRONT_ROOT"/docker/nginx_conf
    sed -i -e "s~USERNAME~$(whoami)~" "$FRONT_ROOT"/docker/nginx_conf
    sed -i -e "s~SSL_CERTIFICATE~$SSL_CERTIFICATE~" "$FRONT_ROOT"/docker/nginx_conf
    sed -i -e "s~SSL_KEY~$SSL_KEY~" "$FRONT_ROOT"/docker/nginx_conf
fi

# generate nginx config with SSL certificate for outside Docker
if [ ! -f "$FRONT_ROOT"/docker/nginx_ssl ]; then
    echo_title "GENERATING EXTERNAL NGINX CONFIG"
    cp "$FRONT_ROOT"/docker/nginx.conf.ssl_template "$FRONT_ROOT"/docker/nginx_ssl

    sed -i -e "s~SSL_CERTIFICATE~$SSL_CERTIFICATE~" "$FRONT_ROOT"/docker/nginx_ssl
    sed -i -e "s~NGINX_PORT~$NGINX_PORT~" "$FRONT_ROOT"/docker/nginx_ssl
    sed -i -e "s~PROD_URL~$PROD_URL~" "$FRONT_ROOT"/docker/nginx_ssl
fi
