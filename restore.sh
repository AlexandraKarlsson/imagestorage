#!/bin/bash
# e. g. ./restore.sh 20210101

backup_date=$1
# echo $backup_date
backup_dir="backup/$backup_date/"
# echo $backup_dir

echo "Restore all images from the backup directory $backup_dir."

# Check that the backup for the date exists
if [ -d $backup_dir ] 
then
    echo "Directory $backup_dir exists."

    echo "Remove all images in images directory."
    rm -v images/*

    echo "Restore all images from backup $backup_dir to images directory."
    cp -v $backup_dir/* images/
    echo "Images restored from backup."
else
    echo "Images not restored because $backup_dir does not exist." 
fi
