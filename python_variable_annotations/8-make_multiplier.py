#!/usr/bin/env python3
"""this module contains a closure function contained inside of
the scope of another functino, both protected by type annotation"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """this function returns a function that multiplies
    by the multiplier parameter"""

    def multiplier_func(x: float) -> float:
        return x * multiplier
    
    return multiplier_func
