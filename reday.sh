#!/bin/bash

# Set the base directory name
BASE_DIR="Kanban_Eisenhower_Project"

# Create the base directory
mkdir -p "$BASE_DIR/public/css" "$BASE_DIR/public/js"

# Navigate to the base directory
cd "$BASE_DIR" || exit

# Create HTML files
touch public/kanban.html public/eisenhower.html

# Create the main application file
touch app.js

# Provide feedback
echo "Project structure created successfully."

# List the created structure for verification
tree

