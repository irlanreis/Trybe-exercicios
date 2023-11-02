from selenium import webdriver
from selenium.webdriver.common.keys import Keys

firefox = webdriver.Firefox()

response = firefox.get("https://www.google.com.br/")

# Pesquisa na instâcia aberta do navegador pela primeira ocorrêcia
# do nome 'q'
search_input = firefox.find_element("name", "q")

# Escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# Pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)
