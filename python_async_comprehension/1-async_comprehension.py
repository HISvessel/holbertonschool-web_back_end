#!/usr/bin/env pytohn3
"""this sciprt contains a fucntion that generates a coroutine"""


from typing import List


async_generator = __import__('0-async_generator').async_generator

async def async_comprehension() -> List[float]:
    """this function generates a routine"""
    return [value async for value in async_generator()]
