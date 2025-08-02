#!/usr/bin/env python3
"""this script contains a function that generates
10 random floats"""


import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """this function generates a random float number 10 times"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)