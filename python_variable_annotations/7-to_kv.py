#!/usr/bin/env python3
"""this functino takes a string and a float or integer
and returns a tuple"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """this function returns a tuple where the first element
    is a string and the second element is a square of an
    integer or a float"""

    return (k, v**2)
