#!/usr/bin/env python3

"""this script contains a function named index_range that takes
two arguments: page and page_size"""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    return ((page - 1) * page_size, page_size * page)
