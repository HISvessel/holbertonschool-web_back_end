#!/usr/bin/env python3
"""this function introduces the concept of type annotation
this is a more concrete form of documentation and error handling
of dynamic types. We are essentialy indicating with this that we are expecting
in a very concrete and concise manner that we are expecting a sum and a
result of floats, and if any other data type is passed, an error is thrown"""


def add(a: float, b: float) -> float:
    return a + b
