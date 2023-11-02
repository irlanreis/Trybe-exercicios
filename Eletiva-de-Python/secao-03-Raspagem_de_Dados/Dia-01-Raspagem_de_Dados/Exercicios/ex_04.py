import requests
import parsel

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
seletor = parsel.Selector(response.text)

title = seletor.css("h1::text").get()

price = seletor.css(".product_main > .price_color::text").re_first(
    r"\d*\.\d{2}"
)

description = seletor.css("#product_description ~ p::text").get()
suffix = "...more"

if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_BASE + seletor.css("#product_gallery img::attr(src)").get()

print(title, price, description, cover, sep=",")