#!/bin/bash

# Get current date
current_day=`date +%Y%m%d`
echo $current_day

# Create directory in backup directory
mkdir backup/$current_day

# Copy all images into the current backup directory
cp images/* backup/$current_day