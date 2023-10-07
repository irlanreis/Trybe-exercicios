import pytest


@pytest.fixture  # Criamos a fixture por meio do decorator pytest.fixture
def my_list():  # Por padrão, o nome da fixture será o nome da função
    return [1, 2, 3]
