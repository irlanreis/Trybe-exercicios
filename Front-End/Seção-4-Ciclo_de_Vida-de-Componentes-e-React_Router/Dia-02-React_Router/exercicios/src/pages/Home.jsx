import React, { Component } from 'react';
import "../App.css"

class Home extends Component {
    constructor() {
        super();
        this.state = {
            userName: "Tryber",
            role: "Adimin"
        };
    }

    render() {
        const { history } = this.props;
        return (
            <div className="container">
            <h1>Home Page</h1>
            <button
              className="button"
              type="button"

              //Passando o parâmetro /welcome ao history.push() fará com que, ao ser clicado, o botão direcione a pessoa usuária para a página welcome.
              onClick={ () => history.push("/Welcome", this.state) }
              >
                Acesso a página de Boas-Vindas
              </button>
            </div>
        )
    };
}

export default Home;

//Vamos criar um botão na página Home que fará com que a pessoa usuária, ao clicar nesse botão, seja direcionada para a página /welcome. Para isso, utilizaremos o history.push.