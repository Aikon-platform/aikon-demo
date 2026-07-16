#!/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOT_DIR=$(dirname "$SCRIPT_DIR")
SVELTE_DIR="$ROOT_DIR"/front/interface

source "$SCRIPT_DIR"/utils.sh;

if ! command -v npm &> /dev/null; then
    echo_title "INSTALL NVM & NODE"
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
    # to be able to use nvm without restarting the shell
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
    nvm install node
fi

cd "$SVELTE_DIR" || {
    echo "Svelte directory not found at '$SVELTE_DIR'" && exit 1
};

npm install -D vite
npm install
npm run build
