try:
    with open("arquivo.txt", mode="r") as file:
        print(file.read())
except FileNotFoundError:
    # Será executado um arquivo caso haja a exceção do 'FileNotFoundError'
    print("Arquivo inexistente")
else:
    # Será executado se tudo ocorrer bem no try
    print("Arquivo manipulada e fechado com sucesso")
finally:
    # Será sempre executado, independentemente de erro
    print("Fim da tentativa de ler o arquivo")
