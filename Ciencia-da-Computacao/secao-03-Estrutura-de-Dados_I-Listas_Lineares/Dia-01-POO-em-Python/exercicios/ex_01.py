class Tv:
    def __init__(self, tamanho: int) -> None:
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self) -> None:
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self) -> None:
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError("Canal indisponível")

        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self) -> str:
        return f"""
          Tv {self.__tamanho} polegadas
          Volume: {self.__volume}
          Canal: {self.__canal}
          Ligada: {self.__ligada}
        """


Tv1 = Tv(32)
print(Tv1)
