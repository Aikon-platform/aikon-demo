#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$SCRIPT_DIR/utils.sh"

for ver in 3.{10..12}; do
    if command -v "python$ver" &> /dev/null; then
        python="python$ver"
        break
    fi
done

if [ -z "$python" ]; then
    color_echo red "Python 3.10 to 3.12 is required"
    exit 1
fi

echo_title "SET UP VIRTUAL ENVIRONMENTS"
$python -m venv "$API_DIR"/venv
$python -m venv "$FRONT_DIR"/venv

for venv in "$API_VENV" "$FRONT_VENV"; do
    color_echo yellow "Installing ${venv%/*/*}/requirements.txt inside $venv"
    "$venv"/pip install --upgrade pip
    "$venv"/pip install -r "${venv%/*/*}"/requirements.txt
done
"$API_VENV"/pip install python-dotenv

# TODO test connexion to CUDA
