#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$SCRIPT_DIR/utils.sh"

echo_title "SET UP VIRTUAL ENVIRONMENT"
cd "$FRONT_DIR"
color_echo yellow "Creating frontend virtual environment"
uv sync

# cd "$API_DIR"
# $python -m venv "$API_DIR"/venv
# $python -m venv "$FRONT_DIR"/venv
#
# for venv in "$API_VENV" "$FRONT_VENV"; do
#     color_echo yellow "Installing ${venv%/*/*}/requirements.txt inside $venv"
#     "$venv"/pip install --upgrade pip
#     "$venv"/pip install -r "${venv%/*/*}"/requirements.txt
# done
# "$API_VENV"/pip install python-dotenv

# TODO test connexion to CUDA
