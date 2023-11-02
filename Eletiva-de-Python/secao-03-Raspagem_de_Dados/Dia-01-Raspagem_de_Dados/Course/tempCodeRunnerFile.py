from requests import request


response = request.get("http://httpbin.org/get")
# Equivalente ao json.loads(response.content)
print(response.json())
