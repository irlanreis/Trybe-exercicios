import requests


BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"


response = requests.get(BASE_URL)
print(response.text)
