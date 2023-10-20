from typing import Optional


class Person:
    def __init__(
        self,
        name,
        age: Optional[int] = None,
        account_balance: Optional[int] = None,
    ) -> None:
        self.name = name
        self.age = age
        self.account_balance = account_balance


# Isso representaria o polimorfismo com sobrecarga de métodos
# Onde a classe recebe mais de 1 parâmetro
person_1 = Person("João", 22, 900)
person_2 = Person("Dagmar")
person_3 = Person("Maria", 90)
person_4 = Person("Márcia", account_balance=9000)
print(person_1.name)


# BEGIN: 8f7e6d4c1b3a
class Calculator:
    def add(self, num1, num2):
        return num1 + num2

    def add_(self, num1, num2, num3):
        return num1 + num2 + num3


# END: 8f7e6d4c1b3a
