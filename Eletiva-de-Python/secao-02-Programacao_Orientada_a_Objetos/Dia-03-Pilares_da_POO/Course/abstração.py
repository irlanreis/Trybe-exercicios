class Rectangle:
    def __init__(self, base: int, height: int) -> None:
        self.base = base
        self.height = height

    def calculate_area(self) -> int:
        return self.base * self.height

    def calculate_perimetre(self) -> int:
        return 2 * (self.base + self.height)


retangulinho = Rectangle(10, 15)

print("Área:", retangulinho.calculate_area())
print("Perímetro:", retangulinho.calculate_perimetre())
