#!/bin/bash

# Log in to Azure
az login

# Build the application
npm install
npm run build --if-present

# Deploy to Azure App Service
az webapp up --sku F1 --name <your-app-name> --location <your-location> --resource-group <your-resource-group> --runtime "NODE|14-lts" --os-type Linux --html
