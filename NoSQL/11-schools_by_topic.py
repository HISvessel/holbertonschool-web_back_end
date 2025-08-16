#!/usr/bin/env python3
"""this script contains a function that returns a list of
schools having a specific topic"""


def schools_by_topic(mongo_collection, topic):
    """this function contains a query that finds a list
    of entries by the given topic per the given parameter"""

    return list(mongo_collection.find({"topics": topic}))
