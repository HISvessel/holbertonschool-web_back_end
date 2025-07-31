#!/usr/bin/env python3
"""this function takes a mixed list of numbers
and returns their sum as a float"""

from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """this function returns a float of a combination of
    mixed integers and floats in a single list"""
    return float(sum(mxd_list))
