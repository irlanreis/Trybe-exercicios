import json

with open("pokemons.json") as file:
    content = file.read()  # Leitura do arquivo
    pokemons = json.loads(content)["results"]
    # o conteúdo é transformado em estrutura python
    # equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])
