# Escreva uma classe que representa um livro com
# título, autor e número de páginas e tem um método que
# retorna uma string que descreve o livro.


import time


class Book:
    def __init__(self, title: str, author: str, pages: int) -> None:
        self.title = title
        self.author = author
        self.pages = pages

    def description(self) -> str:
        return f"{self.title}, de {self.author}, tem {self.pages} páginas."

    # def __str__(self) -> str:
    #     return self.description()
    def write_slow(self, speed=0.08) -> str:
        description = self.description()
        for char in description:
            print(char, end="", flush=True)
            time.sleep(speed)
        return "\nFinished!"


book = Book("As crônicas de Nárnia", "autor desconhecido", 570)

print(book.write_slow())
