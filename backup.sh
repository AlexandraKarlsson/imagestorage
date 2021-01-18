#!/bin/bash

# Get current date
current_day=`date +%Y%m%d`
# echo "Current day $current_day"

backup_dir="backup/$current_day"
# echo "backup directory $backup_dir"

echo "Create backup of all images to the directory $backup_dir."

# TODO: Check if directory already exist and remove it and all files
echo "Create the backup directory $backup_dir."
mkdir -v $backup_dir

echo "Backup all files in the images directory to $backup_dir."
cp -v images/* $backup_dir
echo "Backup is created! ---"