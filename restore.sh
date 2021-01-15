#!/bin/bash
# e. g. restore 20210101

backup_date=$1
echo $backup_date

# Check that the backup for the date exists otherwise exit

# Remove all images in images directory
rm images/*

# Copy all images from selected backup
cp backup/$backup_date images/