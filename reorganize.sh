#!/bin/bash

# Create necessary directories
mkdir -p src/app/(app)/projects
mkdir -p src/app/(app)/dashboard

# Move projects from (site) to (app)
cp -r src/app/\(site\)/projects/* src/app/\(app\)/projects/

# Move dashboard to (app)
cp -r src/app/dashboard/* src/app/\(app\)/dashboard/

# Clean up old directories (preserving Payload)
rm -rf src/app/\(site\)
rm -rf src/app/\(auth\)
rm -rf src/app/dashboard
rm -rf src/app/my-route
rm -rf src/app/\(admin\)

# The (payload) directory stays intact for Payload CMS functionality 