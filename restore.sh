#!/bin/bash
# e. g. restore 20210101

backup_date=$1
echo $backup_date
backup_dir=`backup/$backup_date/`
echo $backup_dir

# Check that the backup for the date exists otherwise exit
if [ -d $backup_dir ] 
then
    echo `Directory $backup_dir exists.` 
    echo "Remove all images in images directory."
    rm -f images/*

    echo "Copy all images from backup $backup_dir to directory images."
    cp $backup_dir/* images/
    echo "Backup is restored!"
else
    echo `Directory $backup_dir dont exist.` 
fi
