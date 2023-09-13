def vertical_inverted_ladder(word):
    for remover_letters in range(len(word)):
        for i in range(len(word) - remover_letters):
            print(word[i], end="")
        print()


if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name.upper())
