#!/usr/bin/env python3
"""this script contains a function that inserts data on
a mongoDB collection"""


def insert_school(mongo_collection, **kwargs):
    """this function inserts a new document inside a collection
    based on the kwargs given
    
    We use the insert functon in its deprecated form. SInce this
    function handles a single insert, we use the insert_one builtin"""

    result = mongo_collection.insert_one(dict(kwargs))
    return result.inserted_id
