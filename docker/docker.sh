#!/bin/bash

# HOW TO USE
# Inside the docker/ directory, run:
# sudo bash docker.sh <start|stop|restart|update|build>

set -e

DOCKER_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# initialize the .env files and data folder permissions on first initialization
bash "$DOCKER_DIR"/init.sh

dc="docker-compose -p aikondemo"

build_containers() {
    $dc build
    # TODO collectstatic
}

stop_containers() {
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
    $dc rm -f $1
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
        echo "Usage: $0 {start|stop|restart|update|build}"
        exit 1
esac

# TODO add more echo and interactivity to let the user know what is happening
