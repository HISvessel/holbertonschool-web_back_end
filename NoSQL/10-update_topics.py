#!/usr/bin/env python3
"""this script contains a function to update entries on a
database collection"""


def update_topics(mongo_collection, name, topics):
    """this function performs a query to update the content
    of a collection where the updates items are the ones
    that match the given name

    remember the mongoDB syntax for updating values, which
    uses the $set argument and makes a new dictionary entry.


    Pymongo uses deprecation for the function, so be specific if
    you wish to update_one or update_many"""
    return mongo_collection.update_many({"name": name},
                                        {"$set": {"topics": topics}})
