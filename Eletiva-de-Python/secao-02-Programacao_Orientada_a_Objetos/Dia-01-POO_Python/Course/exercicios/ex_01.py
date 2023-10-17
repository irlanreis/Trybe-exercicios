# Escreva uma função que recebe uma lista de inteiros e retorna a
# soma desses valores.
from typing import List


def sum(lists: List[int]) -> int:
    total = 0
    for value in lists:
        total += value
    return total


values = [1, 2, 3, 4, 5]

print(sum(values))
