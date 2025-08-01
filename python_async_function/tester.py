#!/usr/bin/env python3
import asyncio

async def say_hello():
    await asyncio.sleep(5)
    print("Hello (I was supposed to print first, you know)")

async def say_mum():
    await asyncio.sleep(2)
    print("mum")
    await asyncio.sleep(1)
    print("....")

async def main():
    await asyncio.gather(say_hello(), say_mum())
    await asyncio.sleep(3)
    print("...well, that was awkward")


asyncio.run(main())
