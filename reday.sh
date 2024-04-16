#!/bin/bash

# Create directories if they don't exist
directories=("database" "database/main" "database/license" "models" "controllers" "routes" "utils" "services" "logs" "public")
for dir in "${directories[@]}"
do
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        echo "Created directory: $dir"
    else
        echo "Directory already exists: $dir"
    fi
done

# Create files if they don't exist
files=("database/databaseConfig.js" "utils/dbHelper.js" "utils/errorHandler.js" "utils/licenseValidator.js" "services/licenseService.js" "logs/licenseLog.txt" "app.js" "package.json")
for file in "${files[@]}"
do
    if [ ! -f "$file" ]; then
        touch "$file"
        echo "Created file: $file"
    else
        echo "File already exists: $file"
    fi
done

# Output message
echo "Directory structure and files have been created."
