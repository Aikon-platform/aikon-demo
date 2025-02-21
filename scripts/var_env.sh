#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$SCRIPT_DIR/utils.sh"

copy_env_values() {
    source_env=$1
    target_env=$2

    IFS=$'\n' read -d '' -r -a lines < "$source_env"

    for line in "${lines[@]}"; do
        if [[ $line =~ ^[^#]*= ]]; then
            param=$(echo "$line" | cut -d'=' -f1)
            current_val=$(get_env_value "$param" "$target_env")
            default_val=$(echo "$line" | cut -d'=' -f2-)
            if [[ -n "$current_val" ]]; then
                $SED_CMD "s~^$param=.*~$param=$default_val~" "$target_env"
            else
                echo "$param=$default_val" >> "$target_env"
            fi
        fi
    done
}

echo_title "SET UP ENVIRONMENT VARIABLES"
for env in "$API_DIR"/.env "$FRONT_DIR"/.env "$ROOT_DIR"/.env.dev "$API_DIR"/.env.dev; do
    color_echo yellow "\nCopying up $env..."
    cp "$env".template "$env"
done

for env in "$API_DIR"/.env "$FRONT_DIR"/.env "$ROOT_DIR"/.env.dev; do
    color_echo yellow "\nSetting up $env..."
    update_env "$env"
done
copy_env_values "$ROOT_DIR"/.env.dev "$API_DIR"/.env.dev
