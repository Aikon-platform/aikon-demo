#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$SCRIPT_DIR/utils.sh"

color_echo yellow "\nSystem packages..."

if [[ "$OS" == "Mac" ]]; then
    command -v brew &> /dev/null || {
        color_echo "yellow" "Installing brew"
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    }
elif [[ "$OS" == "Windows" ]]; then
    command -v winget &> /dev/null || {
        color_echo "red" "Winget is required to install system package" >&2;
        exit 1;
    }
fi

if [[ "$OS" == "Linux" ]]; then
    sudo apt-get update && sudo apt-get install -y redis-server curl
    curl -LsSf https://astral.sh/uv/install.sh | sh
elif [[ "$OS" == "Mac" ]]; then
    brew install redis curl
    curl -LsSf https://astral.sh/uv/install.sh | sh
elif [[ "$OS" == "Windows" ]]; then
    winget install -e --id Redis.Redis cURL.cURL
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
fi
