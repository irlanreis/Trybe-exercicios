# from parsel import Selector
# import requests

# response = requests.get(
#     "http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html"
# )
# seletor = Selector(text=response.text)

# # Extrai a descrição
# description = seletor.css("#product_description ~ p::text").get()
# print(description)

# # Fatiamos a descrição removendo o sufixo

# suffix = "...more"

# if description.endswith(suffix):
#     description = description[: -len(suffix)]
# print(description)
