#!/usr/bin/env python3
"""this script contains a type annotated function that takes a
list and returns the sums of its indeces"""


from typing import List

def sum_list(input_list: List[float]) -> float:
    """this function returns the sum of a list
    of floats, reinforced with type annotation."""
    return sum(input_list)
