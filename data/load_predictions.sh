#!/bin/bash
mongoimport --file predictions.txt --mode insert --db thing-a-day --fields prediction --type tsv
