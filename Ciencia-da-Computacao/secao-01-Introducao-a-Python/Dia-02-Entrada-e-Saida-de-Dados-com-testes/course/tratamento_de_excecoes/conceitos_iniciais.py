while True:
    try:
        x = int(input("Por favor digite um número inteiro: "))
        print(f'Parabéns seu número é {x}')
        break
    except ValueError:
        # 'ValueError' é a exceção que ocorre quando a função int() recebe um
        # valor que não pode ser traduzido para número inteiro
        print("Oops! Esse não era um número inteiro. Tente novamente.")
