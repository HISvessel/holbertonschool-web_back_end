#!/usr/bin/env python3

"""this script contains a function named index_range that takes
two arguments: page and page_size"""


from typing import Tuple
def index_range(page: int, page_size: int) -> Tuple[int, int]:
    return (page, page_size * page)

res = index_range(1, 7)
print(type(res))
print(res)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)