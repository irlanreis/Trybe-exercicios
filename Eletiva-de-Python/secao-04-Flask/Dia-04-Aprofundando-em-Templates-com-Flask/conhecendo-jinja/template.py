from jinja2 import Template


# Carrega um template a partir de uma string
template_file = open("../template.html").read()
template = Template(template_file)


# # Cria um contexto
saudacao = "Eu sou um template html"

data = {
    "saudacao": saudacao,
    "informacao": (
        "Essa é uma das formas de passar múltiplas informações para o template"
    ),
    "contexto": "Isso é possível atravez de um contexto",
}


# Renderiza o template com um contexto específico
output = template.render(data)

# Imprime o resultado
print(output)
