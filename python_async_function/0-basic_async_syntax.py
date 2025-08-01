#!/usr/bin/env python3
"""this script contains a function that generates a random
delay time"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """the function waits a random amount of time before returning
    the delayed value for which the time was spent"""

    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
