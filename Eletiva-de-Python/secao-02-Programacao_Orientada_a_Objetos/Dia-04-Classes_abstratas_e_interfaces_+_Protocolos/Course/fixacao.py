from abc import ABC, abstractmethod


class Person(ABC):
    @abstractmethod
    def print_role(self):
        ...


class Seller(Person):
    def print_role(self):
        print("Meu cargo é de vendedor")


class Manager(Person):
    def print_role(self):
        print("Meu cargo é de gerente.")
