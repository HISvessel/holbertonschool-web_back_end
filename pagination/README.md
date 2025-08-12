This repository holds all of the concepts and theories for web pagination, a way to extend the content of one single object into multiple pages.

API filtering: when making requests, we normally perform these fetches with a single unit found or with a list of all the available items set, but never to a specified quantity so far. Well, we can do that with filtering. And on filtering, we can do something like this:

example: suppose you want to fetch items that are of a price greater than 10 but less than 100. Well you can do that by modifying the route: GET /items now turns to GET /items?price[gte]=10&price[lte]=100

Pagination is a filtering method for API requests and responses. Say you want to return a list of entities. To return multiple items one would effectively need pagination to parse cleanly. Without pagination, a simple request can return a list of every item. Imagine performing sql queries and asking for joins. Without pagination, we would end up selecting every element in every table, thereby performing a cross join or cartesian product. Joins search for very particular products from very particular tables. Cartesian products perform a join of every element form every table, effectively giving us more than what was asked for. This causes a breakdown in logic for fetching and, in the case of website performance, this overload of information can cause decrease in performance due to a high volume of information being fetched and output. Pagination exists to solve these issues.

Offset pagination:
The simplest form of paging, we perform a limit or an offset of how many items are divided by page. These are ver popular with sql databases, which already have limit and offset as part of their select syntax. Offset pagination looks a little something like this:

ex. GEt /items?limit=20&offset=100 <-- this query would return th 20 rows starting with the 100th row


Keyset pagination:
this form uses the filter values of the last page to fetch the next set of items. Those columns wuld be indexed

ex: GET /items?limit=20 <- this makes a request for the 20 recently added items
ex2: GET /items?limit=20&created:lte:2021-01-20T00:00:00 <- this is an effective way of filtering queries by date

Seek pagination:
this is an extension of keyset pagination. By adding an after_id or start_id at the URL parameter, we could remove the tiight coupling of paging to filters and sorting. Since unique identifiers are naturally high cardinality, we won't run into issues unike if sprting by a low cardinality field like state enums or category name.

The problem with seek pagination is its hard to implement when a custom sort order is needed.

ex: GET /items?limit=20
GET/items?limit=20&after_id=20
GET /items?limit=20&after_id=40

The above example follows a chain for searching for the 20 most recent items, then on the scroll or next page, the client finds the last id of the 20 previously returned items, and makes a second query using the last 20 items as the point of initial search. Afterwards, the client making the get request performs yet another request, and the result gives the next 20 items parting from the 40 items retrieved in the aforementioned process.


Pagination and Web Scraping:


The process of pagination:
To paginate, we would need to scrape all the data we need. Afterwards, we can narrow down the objects in a structured manner, so as to choose the objects that stay within our desired parameters. For example, when we perform a SQL query, we obtain all the relevant data from our table or tables, through a select statement. Afterwards, we filter out the content and the amount to retrieve by use of if conditionals and iteration limits. For sql, we use if clauses to find the data relevant to the information provided in the if clause, and we use the keywords limit and offset to have a starting point and the amount of data given. 

In one of the tasks studied, we retrieve the data we want to traverse through, place it into a structure we can manipulate, and just filter from start position to end position in said structure. First, we created a helper finction that will set and return all the data in and between the indexed starting point and the endpoint. In the next exercise, we created an example of a server side pagination function that will return the amount of data that will be returned, given a page index and page size(the amount of content that is held in each page). To find the data at the given position, we iterate through the file where the data is stored, and find the data at the given index per the page size and page number. 

Hypermedia and metadata: