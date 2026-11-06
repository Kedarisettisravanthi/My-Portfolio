"""
Sample code to demonstrate CodeGraph parsing, class hierarchy, and call graphs.
"""

import os
import math

class BaseService:
    def __init__(self, name: str):
        self.name = name

    def log(self, msg: str):
        print(f"[{self.name}] {msg}")

class DataProcessor(BaseService):
    def __init__(self, name: str, threshold: float = 1.0):
        super().__init__(name)
        self.threshold = threshold

    def compute(self, values: list) -> float:
        total = sum(values)
        self.log(f"Computed total: {total}")
        return math.sqrt(total)

def process_pipeline():
    processor = DataProcessor("Analytics")
    res = processor.compute([1, 4, 9, 16])
    return res

if __name__ == "__main__":
    process_pipeline()

