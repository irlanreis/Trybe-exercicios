from os import environ
from waitress import serve
from flask import Flask
from controllers.jokes_controller import jokes_controller


import requests
from flask import jsonify


app = Flask(__name__)

app.register_blueprint(jokes_controller, url_prefix="/api/jokes")

# joke_list = [
#     "Por que o bombeiro não gosta de andar? <br> Porque ele socorre.",
#     "Sabe como chama a sorveteria do Michel Teló? <br> Ice te Pego.",
#     "Por que o espanador não luta caratê? <br> Porque ele luta capoeira",
# ]


# @app.route("/api/joke")
# def joke():
#     return jsonify({"joke": random.choice(joke_list)})


@app.route("/api/users/random")
def get_random_user():
    res_user = requests.get("https://random-data-api.com/api/v2/users").json()
    first_name = res_user["first_name"]
    last_name = res_user["last_name"]

    return jsonify(
        {
            "nome_completo": f"{first_name} {last_name}",
            "email": res_user["email"],
            "id_externo": res_user["id"],
        }
    )


def start_server(host: str = "0.0.0.0", port: int = 8000):
    if environ.get("FLASK_ENV") == "dev":
        # Servidor de desenvolvimento do Kit Werkzeug
        app.run(debug=True, host=host, port=port)
    else:
        # Este é o waitress, otimizado para produção
        serve(app, host=host, port=port)


if __name__ == "__main__":
    start_server()
