#!/usr/bin/env python3
"""this script contains a function that queries the mongoDB
databases so that all Python files are listed"""


def list_all(mongo_collection):
    """this function takes a mongo collection as arguments
    and returns all the files listed inside of it"""
    return list(mongo_collection.find())
