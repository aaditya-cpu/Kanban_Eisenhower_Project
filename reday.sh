#!/bin/bash

# Define the directory structure
directories=(
    "/database/main"
    "/database/license"
    "/models"
    "/controllers"
    "/routes"
    "/utils"
    "/services"
    "/logs"
)

# Create directories if they don't exist
for dir in "${directories[@]}"; do
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        echo "Created directory: $dir"
    else
        echo "Directory already exists: $dir"
    fi
done

# Create files if they don't exist
files=(
    "/database/databaseConfig.js"
    "/utils/dbHelper.js"
    "/utils/errorHandler.js"
    "/utils/licenseValidator.js"
    "/services/licenseService.js"
    "/logs/licenseLog.txt"
)

# Check and create files if they don't exist
for file in "${files[@]}"; do
    if [ ! -f "$file" ]; then
        touch "$file"
        echo "Created file: $file"
    else
        echo "File already exists: $file"
    fi
done

# Check if app.js and package.json exist
if [ ! -f "app.js" ]; then
    touch "app.js"
    echo "Created file: app.js"
else
    echo "File already exists: app.js"
fi

if [ ! -f "package.json" ]; then
    touch "package.json"
    echo "Created file: package.json"
else
    echo "File already exists: package.json"
fi
