# Escreva uma função que recebe uma lista de strings e um caractere e retorna
# uma lista com as strings que começam com o caractere fornecido.


from typing import List


def search_name(lists_input: List[str], char: str) -> List[str]:
    result = []
    for word in lists_input:
        if word.startswith(char):
            result.append(word)
    return result


animals = ["cachorro", "gato", "elefante", "girafa"]
char = "c"

print(search_name(animals, char))
