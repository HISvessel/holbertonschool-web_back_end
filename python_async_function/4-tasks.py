#!/usr/bin/env python3
"""this script contains a task that tranforms a task into another
the async task recieved is one that is stored into the task wait
random module"""

import asyncio
from typing import List


task_wait_random = __import__("3-tasks").task_wait_random


async def task_wait_n(n: int, max_delay: int) ->List[float]:
    """this task performs a series of sequences and stores them
    in a list. these sequences are retrieved from another module
    and replicate imported behaviour, showing encapsulation"""
    task: List[asyncio.Task[float]] = [task_wait_random(max_delay) for _ in range(n)]
    task_load: List[float] = []
    for completed_task in asyncio.as_completed(task):
        delay = await completed_task
        task_load.append(delay)
    return task_load
