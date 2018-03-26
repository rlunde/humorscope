#!/usr/bin/env python3
from pymongo import MongoClient
client = MongoClient()
db = client['thing-a-day']
collection = db.quotes

def savequote(collection, quote):
    record = {"quote": quote}
    quote_id = collection.insert_one(record).inserted_id
    quote_id

inputfile = open('./data/quote.data')
quote = ""
for line in inputfile:
    line = line.rstrip()
    if line == '#':
        savequote(collection, quote.rstrip() + "\n")
        quote = ""
    else:
        quote = quote + line + " "
savequote(collection, quote.rstrip())

