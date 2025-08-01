#!/usr/bin/env python3
"""this script contains a function called task wait random that
takes an integer and returns an asynchronous tasks"""


import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """this function takes an integer and returns an
    asynchronous task as confirmed via type annotation"""

    return asyncio.create_task(wait_random(max_delay))
