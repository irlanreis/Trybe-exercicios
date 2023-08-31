# import sys


# if __name__ == "__main__":
#     for argument in sys.argv:
#         print("Received -> ", argument)

# user_input = input("escreva uma msg: ")
# print('Recebi o valor: ', user_input)


# print("maria", "joão", "pedro")
# print("maria", "joão", "pedro", sep=", ")

# import sys


# err = "Arquivo não encontrado"
# print(f"Erro aconteceu: {err}", file=sys.stderr)

# valor_de_entrada = input("Escreva uma palavra: ")
# for letter in valor_de_entrada:
#     print(letter.upper())


nums = input("Insira valores aqui, separados por espaço: ")

nums_arr = nums.split(" ")

sum = 0
for num in nums_arr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
