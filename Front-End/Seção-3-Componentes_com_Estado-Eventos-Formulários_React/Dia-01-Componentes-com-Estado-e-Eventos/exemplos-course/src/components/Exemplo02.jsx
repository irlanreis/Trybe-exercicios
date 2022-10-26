import React, { Component } from 'react'

class Exemplo02 extends Component {
handleClick(){
    console.log(this);
    console.log('clicado');
}
    render() {
        console.log(this);
    return (
        <button onClick={this.handleClick}>Botão</button>
        )
    }
}
export default Exemplo02;

// Exibe no console.log da função render() o objeto this! 
// e undefined no console.log da função handleClick!