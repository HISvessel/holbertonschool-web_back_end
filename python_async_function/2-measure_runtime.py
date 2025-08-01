#!/usr/bin/env python3
"""this script contains the function called measure_time that takes
an integer and returns the total elapsed time of a given set of concurrencies"""

import asyncio
import time


wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """this function returns the total elapsed timed for the wait_n
    function to complete given an n index and a delay time"""
    clock_in = time.time()
    asyncio.run(wait_n(n, max_delay))
    clock_out = time.time() - clock_in
    return clock_out / n
