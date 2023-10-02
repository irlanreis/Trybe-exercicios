class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorna o tamanho da de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # retorna o elemento no indice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no indice informado
        self.data.insert(index, value)


# vamos inicializar e preencher uma estrutura de dados array

array = ListaArray()
array.set(0, "Felipe")
array.set(1, "João")
array.set(2, "Maria")
array.set(3, "José")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(1))  # saída: João
print(array.get(2))  # saída: Maria
print(array.get(3))  # saída: José

# podemos iterar sobre elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    # incrementa o índice
    index += 1
