#!/usr/bin/env python3

"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """this function returns a dictionary containing the items
        that are queried from the dataset, and it gets the
        correct order of these items regardless if they
        were other items previously deleted. Non existent
        elements should be handled gracefully by lookning to
        the next one."""

        assert isinstance(index, int) and 0 <= index <= len(self.dataset())
        next_index = index + page_size
        data = self.indexed_dataset()
        next = index + 1
        element = data.get(index)
        next_element = data.get(next)
        second_next_element = data.get(next + 1)
        data_index = []
        if element is None:
            data_index = [next_element + second_next_element]
        else:
            data_index = [element + next_element]

        return {"index": index,
                "data": data_index,
                "page_size": page_size,
                "next_index": next_index}
