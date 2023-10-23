# Interfaces -> Contratos a serem seguidos.

from typing import Protocol


# Para criar um protocolo basta criar uma classe que herda de Protocol
class Connection(Protocol):
    """Protocolo de conexão com banco de dados"""

    # O corpo do método não deve ter nada, portanto é comum utilizar
    # ellipsis (os 3 pontos abaixo) do Python, ou a palavra reservada pass
    ...


class Data_base(Protocol):
    """Protocolo de um bando de dados"""

    def connect(self, connection_url: str) -> Connection:
        """Realiza conexão com banco de dados"""
        ...
