#!/bin/bash

# HOW TO USE
# Inside the docker/ directory, run:
# sudo bash docker.sh <start|stop|restart|update|build|destroy|fresh>

set -e

DOCKER_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

dc="docker-compose -p aikondemo"

build_containers() {
    # initialize the .env and config files as well as data folder permissions on first initialization
    bash "$DOCKER_DIR"/init.sh
    $dc build
    docker network connect aikondemo_demo_network aikonapi
    # TODO collectstatic
}

stop_containers() {
    docker network disconnect -f aikondemo_demo_network aikonapi
    $dc down
}

start_containers() {
    $dc up -d
}

update_containers() {
    git pull
    build_containers
}

delete_data() {
    # sudo rm -rf "$DATA_FOLDER"
    # $dc rm -f
    docker volume rm aikondemo_pgdata aikondemo_redisdata
}

case "$1" in
    start)
        start_containers
        ;;
    stop)
        stop_containers
        ;;
    restart)
        stop_containers
        start_containers
        ;;
    update)
        stop_containers
        update_containers
        start_containers
        ;;
    build)
        stop_containers
        build_containers
        start_containers
        ;;
    destroy)
        stop_containers
        delete_data
        ;;
    fresh)
        stop_containers
        delete_data
        $dc build --no-cache
        start_containers
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|update|build|destroy|fresh}"
        exit 1
esac

# TODO add more echo and interactivity to let the user know what is happening
