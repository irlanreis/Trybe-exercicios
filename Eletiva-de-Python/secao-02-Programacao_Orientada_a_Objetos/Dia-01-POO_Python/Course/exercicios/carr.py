class Car:
    def identify(self, brand: str, model: str, year: int, color: str) -> None:
        print(
            f"Meu carro é um {model}"
            f" da {brand}. Ele é ano {year} e tem a cor {color}"
        )


car = Car()

car.identify("fiat", "uno", 1990, "verde")
