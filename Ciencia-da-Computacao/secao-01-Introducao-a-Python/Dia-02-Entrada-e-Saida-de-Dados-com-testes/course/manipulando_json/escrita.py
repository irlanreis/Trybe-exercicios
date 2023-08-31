import json

# Leitura de todos os pokemons
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

# Abre o arquivo para escrevermos apenas os pokemons do tipo grama
with open("grass_type_pokemons.json", mode="w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    )  # convenção de Python para o formato json (str)
    file.write(json_to_write)
