class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.name = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def __str__(self):
        return f"""
        {self.name} - possui {self.saldo_na_conta} reais em sua conta.
        """


pessoa_cozinheira = Pessoa("Jacquin", 1000)

print(pessoa_cozinheira)
