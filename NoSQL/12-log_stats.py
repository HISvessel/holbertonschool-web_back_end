#!/usr/bin/env python3
"""this script provides information about Nginx as stored
in MongoDB"""

from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')

    db = client.logs
    collection = db.nignx

    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")


    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    for method in methods:
        count = collection.count_documents({"methods": method})
        print(f"\tmethod {method}: {count}")
    
    status_check = collection.count_document(
        {"method": "GET", "path": "/status"})
    print(f"{status_check} status check")
