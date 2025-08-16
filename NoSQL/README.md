Welcome to NoSQL. This repository will help us get a better understanding of how to handle non relational databses, or non structured databases. 

1) Definition: 
NoSQL stands for Not Only SQL, which would refer to the concept of utilizing databases that are not compliant with the structures of SQL databases. This implies a many great things, which are characteristic, have great benefits and also some drawbacks.

2) Characteristics:
How are non relational databases created? Well, this is the most important distinction between SQL and NoSQl: there is no schema to be created. Having no defined schema means that rows do not have to meet a certain instertion criteria, nor does data have to be uniform. With this non existent schema, it means that there is no enforcing of table relations, which is very distinctive from SQL. Likewise, the data read is not only rows inserted in a table; we can also use other documents, objects and models to store as the content of the database. Thirdly, content is not scaled vertically, but horizontally. This last one is better discussed on the pros and cons of NOSQL databases. Finally, and most important, having no schema means that we can perform exchange and storage of data that is not a table, meaning we can store objects, graphs, documents, and other stuff.

3) Pros and Cons:

Going through the pros, the first and the most important is that querying large quantities of data is much less daunting, since searching and filtering are not conditioned to relations between tables. This means that NoSQL have their place on the market for companies or projects looking to handle very large amounts of data. The second pro of having nosql would be not needing a schema to imlement a prefixed structure, which would require a lot of premeditation and elaboration for handling enormous data entries. This means that I do not need to tailor my tables to store the data that will come, meaning it is more flexible. Data sharding is also possible, making horizontal scaling of data much easier to perform. It also means tables do not need to be recreated to fit new criterias, for which we can easily make room for and tie into the base.

The first remarkable con about NoSQL is that it cannot garantee the ACID component of data storage: atomicity, consistency, isolation and durability. Most of these components are done through structure and careful tracking that comes from SQL. Since NoSQL does not follow the same approach, it cannot garantee ACIDic data transactions. With this also comes the con of potentially not having access to fresh data, since large horizontal inserts can cause delays. 

4) mongoDB:
Welcome to the MongoDB 4.4 Manual! MongoDB is a document database designed for ease of development and scaling. The Manual introduces key concepts in MongoDB, presents the query language, and provides operational and administrative considerations and procedures as well as a comprehensive reference section.

MongoDB offers both local and cloud-hosted deployment options:

For locally hosted deployments, MongoDB offers both a Community and an Enterprise version of the database:

MongoDB Community is the source available and free to use edition of MongoDB.

MongoDB Enterprise is available as part of the MongoDB Enterprise Advanced subscription and includes comprehensive support for your MongoDB deployment. MongoDB Enterprise also adds enterprise-focused features such as LDAP and Kerberos support, on-disk encryption, and auditing.

MongoDB Atlas is a hosted MongoDB Enterprise service option in the cloud which requires no installation overhead and offers a free tier to get started.

You can create a MongoDB database in the following environments:

MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud

MongoDB Enterprise: The subscription-based, self-managed version of MongoDB

MongoDB Community: The source-available, free-to-use, and self-managed version of MongoDB

To learn more about creating a MongoDB database with the Atlas UI, see Get Started with Atlas.

Document Database
A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents.

The advantages of using documents are:

Documents (i.e. objects) correspond to native data types in many programming languages.

Embedded documents and arrays reduce need for expensive joins.

Dynamic schema supports fluent polymorphism.

Collections/Views/On-Demand Materialized Views
MongoDB stores documents in collections. Collections are analogous to tables in relational databases.

In addition to collections, MongoDB supports:

Read-only Views (Starting in MongoDB 3.4)

On-Demand Materialized Views (Starting in MongoDB 4.2).

Key Features
High Performance
MongoDB provides high performance data persistence. In particular,

Support for embedded data models reduces I/O activity on database system.

Indexes support faster queries and can include keys from embedded documents and arrays.

Rich Query Language
MongoDB supports a rich query language to support read and write operations (CRUD) as well as:

Data Aggregation

Text Search and Geospatial Queries.

Tip
SQL to MongoDB Mapping Chart

SQL to Aggregation Mapping Chart

High Availability
MongoDB's replication facility, called replica set, provides:

automatic failover

data redundancy.

A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and increasing data availability.

Horizontal Scalability
MongoDB provides horizontal scalability as part of its core functionality:

Sharding distributes data across a cluster of machines.

Starting in 3.4, MongoDB supports creating zones of data based on the shard key. In a balanced cluster, MongoDB directs reads and writes covered by a zone only to those shards inside the zone. See the Zones manual page for more information.

Support for Multiple Storage Engines
MongoDB supports multiple storage engines:

WiredTiger Storage Engine (including support for Encryption at Rest)

In-Memory Storage Engine.

In addition, MongoDB provides pluggable storage engine API that allows third parties to develop storage engines for MongoDB.

5) mongo shell
The mongo shell is an interactive JavaScript interface to MongoDB. This shell can be used to query and update data as well as perform administrative operations.

6) Syntax and basic queries
show dbs <- this can be used to show all available databases

use dbs <- this query toggles the mentioned database to be used

db.dbs.find() <- this query searches for all inserted data contained in the dbs collection.

db.dbs.insert(key: value) <- this query inserts data inside of the dbs collection as stored by key value pairs. **NOTE: data is inserted as arguments in the form of a dictionary, so open {} inside of the function parenthesis.

db.dbs.count() <- this query returns the sum of all inserted data inside of the tagged collection.

db.dbs.update({key_to_find, value_to_find}, {$set: {"new_key": "new_value"}}) <- this query updates all instances of the key_to_find and value_to_find inside of the collection. You use the $set(one of the many arguments that can be used for update operations) in order to inserts a new key:value pair. **NOTE: the above syntax is correct; whichever key value pair is inserted, it must be done as a new dictionary separated by a comma inside of the update function scope().

db.dbs.delete("key_to_filter": "value") <- this query deletes the first instance of the item in the collection with the filtered key:value pair. the delete function has two variants: deleteOne() and deleteAll(). 


7) Python and mongoDB
We can use ORM principles to utilize mongo db but from Python instead of the command line interface. We can do this with the Python driver called PyMongo