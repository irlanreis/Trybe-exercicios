class Funcionario:
    def __init__(self, nome) -> None:
        self.__name = nome  # Atributo privado

    def return_name(self):
        return self.__name


class Empresa:
    func = []

    def __init__(self) -> None:
        print("Empresa Fictícia em funcionamento")

    def funcionar(self):
        while True:
            print("1. Contratar")
            print("2. Exibir lista de funcionários")
            op = int(input())

            if op == 1:
                self.contratar()

            elif op == 2:
                self.lista_de_func()

            else:
                print('Opção inválida')

    def contratar(self):
        nome = input("Nome: ")
        self.func.append(Funcionario(nome))

    def lista_de_func(self):
        for funcionario in self.func:
            print("Contrado: ", funcionario.return_name())


empresa = Empresa()
empresa.funcionar()
