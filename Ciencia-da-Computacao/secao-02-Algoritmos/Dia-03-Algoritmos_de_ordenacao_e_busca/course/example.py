def insertion_sort(numbers):
    n = len(numbers)
    print(n)

    for index in range(1, n):
        key = numbers[index]  # Pega segundo elemento e define como chave
        print(key)
        new_position = (
            index - 1
        )  # Toma a posição anterior para iniciar a comparação
        while (
            new_position >= 0 and numbers[new_position] > key
        ):  # Enquanto a chave for menor, remaneja o elemento para frente
            numbers[new_position + 1] = numbers[
                new_position
            ]  # Remaneja o elemento
            new_position = new_position - 1

        numbers[new_position + 1] = key  # Insere a chave na posição correta
    return numbers


numbers = [7, 5, 9, 2, 6, 8]
print(insertion_sort(numbers))
