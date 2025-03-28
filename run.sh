#!/bin/bash
[ ! -f .env.dev ] || export $(grep -v '^#' .env.dev | xargs)

ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cleanup() {
    echo "Gracefully shutting down processes..."

    # Kill dramatiq first to avoid logging errors during shutdown
    if [ -n "$front_dramatiq_pid" ]; then
        echo "Stopping dramatiq..."
        kill -TERM $front_dramatiq_pid 2>/dev/null || kill -KILL $front_dramatiq_pid 2>/dev/null
    fi

    # Small delay to let dramatiq terminate before other processes
    sleep 1

    # Then terminate the front server
    if [ -n "$front_server_pid" ]; then
        echo "Stopping frontend server..."
        kill -TERM $front_server_pid 2>/dev/null || kill -KILL $front_server_pid 2>/dev/null
    fi

    # Finally terminate the API
    if [ -n "$api_pid" ]; then
        echo "Stopping API server..."
        kill -TERM $api_pid 2>/dev/null || kill -KILL $api_pid 2>/dev/null
    fi

    # Wait for processes to terminate
    wait $api_pid $front_server_pid $front_dramatiq_pid 2>/dev/null

    echo "All processes terminated."
    exit 0
}

# Set up trap for clean termination
trap cleanup SIGINT SIGTERM

# Start API service
cd $ROOT_DIR/api/ && bash run.sh &
api_pid=$!

# Start Django frontend server
cd $ROOT_DIR/front/ && venv/bin/python manage.py runserver $FRONT_PORT &
front_server_pid=$!

# Start Dramatiq worker
cd $ROOT_DIR/front/ && venv/bin/python manage.py rundramatiq -t 1 -p 1 &
front_dramatiq_pid=$!

echo "Services started. Press Ctrl+C to terminate all services."
echo "API PID: $api_pid"
echo "Frontend Server PID: $front_server_pid"
echo "Dramatiq Worker PID: $front_dramatiq_pid"

# Wait for all processes
wait $api_pid $front_server_pid $front_dramatiq_pid
