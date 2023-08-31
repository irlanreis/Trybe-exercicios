# Criamos um contexto, limitando o escopo onde o arquivo está aberto
# O uso do "as" aqui é somente para atribuir o
# valor utilizado no contexto á variável file
with open("example.txt", "w") as file:
    # como estamos DENTRO do contexto, verificamos que o arquivo está ABERTO
    # através do atributo booleano 'closed' (file.closed = False)
    print(file.closed)
# como estamos FORA do contexto, o arquivo está FECHADO (file.closed = True)
print(file.closed)


# Para escrevermos um conteúdo em um arquivo utilizamos a função write:
# with open("arquivo.txt", "w") as file:
# file.write("nome idade\n")
# file.write("Maria 45\n")
# file.write("Miguel 33\n")

# escrita
with open("arquivo.txt", "w") as file:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(LINES)

# leitura
with open("arquivo.txt", "r") as file:
    for line in file:
        print(
            line
        )  # não esqueça que a quebra de linha também é um caractere da linha
