#!/bin/bash
[ ! -f .env.dev ] || export $(grep -v '^#' .env.dev | xargs)

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
FRONT_DIR="$ROOT_DIR"/front
API_DIR="$ROOT_DIR"/api

PYTHON=$(command -v python3 || command -v python)
if [ -z "$PYTHON" ]; then
  echo "Error: no Python interpreter found (looked for python3 and python)" >&2
  exit 1
fi

cleanup() {
    if [ -n "$front_dramatiq_pid" ]; then
        echo "Stopping dramatiq..."
        kill -TERM $front_dramatiq_pid 2>/dev/null || kill -KILL $front_dramatiq_pid 2>/dev/null
    fi

    # Small delay to let dramatiq terminate before other processes
    sleep 1

    if [ -n "$front_server_pid" ]; then
        echo "Stopping frontend server..."
        kill -TERM $front_server_pid 2>/dev/null || kill -KILL $front_server_pid 2>/dev/null
    fi

    if [ -n "$api_pid" ]; then
        echo "Stopping API server..."
        kill -TERM $api_pid 2>/dev/null || kill -KILL $api_pid 2>/dev/null
    fi

    wait $api_pid $front_server_pid $front_dramatiq_pid 2>/dev/null

    echo "All processes terminated."
    exit 0
}

trap cleanup SIGINT SIGTERM

# Start API service
cd "$API_DIR" && "$PYTHON" run.py up &
api_pid=$!

# Start Django frontend server
cd "$FRONT_DIR" && uv run --directory="$FRONT_DIR" manage.py runserver $FRONT_PORT &
front_server_pid=$!

# Start Dramatiq worker
cd "$FRONT_DIR" && uv run --directory="$FRONT_DIR" manage.py rundramatiq -t 1 -p 1 &
front_dramatiq_pid=$!

echo "Services started. Press Ctrl+C to terminate all services."
echo "API PID: $api_pid"
echo "Frontend Server PID: $front_server_pid"
echo "Dramatiq Worker PID: $front_dramatiq_pid"

# Wait for all processes
wait $api_pid $front_server_pid $front_dramatiq_pid
