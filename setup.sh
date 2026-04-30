#!/bin/env bash


ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
API_DIR="$ROOT_DIR/api"
echo $API_DIR;

source scripts/utils.sh

run_script() {
    local script_name="$1"
    local description="$2"

    echo -e "\n"
    read -p "Do you want to run $description? (y/n): " -n 1 -r
    echo

    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if bash "$SCRIPT_DIR/$script_name"; then
            color_echo green "$description completed successfully"
        else
            color_echo red "$description failed with exit code. Continuing..."
        fi
    else
        color_echo blue "Skipping $description"
    fi
}

run_script "setup_submodule.sh" "Submodule initialization"
run_script "setup_system_package.sh" "System packages installation"
run_script "setup_var_env.sh" "Environment variables configuration"
run_script "setup_venv.sh" "Virtual environment setup"
run_script "setup_database.sh" "Database configuration"
# run_script "redis.sh" "Redis installation and setup"
# run_script "vite.sh" "Vite setup"

# install the API
cd "$API_DIR"
if ! bash "$API_DIR"/setup.sh; then
    color_echo red "API setup encountered an error"
    exit 1
fi

echo_title "🎉 FRONT & API ARE SET UP! 🎉"
color_echo blue "\nYou can now run the app and API with: "
color_echo green "          $ bash run.sh"

color_echo blue '\nConnect to app using:'
echo -e "          👤 $POSTGRES_USER"
echo -e "          🔑 $POSTGRES_PASSWORD"
echo ""

cd $ROOT_DIR
# remove exported variables from shell
fresh_shell
