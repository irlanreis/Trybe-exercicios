import React, { Component } from 'react'

class Exemplo03 extends Component {
    handleClick = () => {
        console.log(alert('Clicado!!!'));
    };
  render() {
    return (
        <button onClick={this.handleClick}>Botão</button>
    )
  }
}
export default Exemplo03;