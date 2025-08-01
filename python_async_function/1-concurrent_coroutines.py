#!/usr/bin/env python3
"""this script contains a function that creates a list of
concurrencies and annotates them in sequential order"""

import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """this function returns a list of concurrencies. The
    times are appended in the orther in which the occur and the ammount
    is dependant on the range given by the n parameter"""

    timer = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    time_list: List = []
    for completed_future in asyncio.as_completed(timer):
        delay = await completed_future
        time_list.append(delay)
    return time_list
