#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$SCRIPT_DIR/utils.sh"

echo_title "SETUP VITE"

setup_pnpm() {
    if ! command -v pnpm &> /dev/null; then
        color_echo yellow "\nInstalling pnpm..."
        if [[ "$OS" == "Linux" ]]; then
            wget -qO- https://get.pnpm.io/install.sh | sh -
        elif [[ "$OS" == "Mac" ]]; then
            wget -qO- https://get.pnpm.io/install.sh | sh -
        elif [[ "$OS" == "Windows" ]]; then
            Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
        fi
    fi
}

setup_webpack() {
    cd "$FRONT_DIR"/interface || exit 1
    pnpm install
    pnpm run dev
}

setup_pnpm
setup_webpack
