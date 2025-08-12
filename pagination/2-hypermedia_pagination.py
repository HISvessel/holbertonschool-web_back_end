#!/usr/bin/env python3

"""this script contains a function designed to paginate hypermedia"""


import csv
import math
from typing import List, Dict


index_range = __import__("0-simple_helper_function").index_range


class Server:
    """Server class to paginate a databse of popular baby names"""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """this function returns the items located at the given page
        and page size. The pagination works by slicing the places in the list
        where the items are located. Erros are handled gradefully by returning
        an empty list if the indeces go over the size of the list"""

        data = self.dataset()
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        start, end = index_range(page, page_size)
        if start > len(data):
            return []

        return data[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """this function returns a dictionary containing key value pairs
        pertaining to the hypermedia and the structure that will be
        paginated."""

        data_length = len(self.dataset())
        total_pages = math.ceil(data_length / page_size)
        data = self.get_page(page, page_size)
        size = len(data)
        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": size,
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
