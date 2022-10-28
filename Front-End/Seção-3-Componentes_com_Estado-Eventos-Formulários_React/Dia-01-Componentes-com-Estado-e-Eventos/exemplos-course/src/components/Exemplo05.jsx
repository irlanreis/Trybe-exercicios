import React, { Component } from 'react'

class Exemplo05 extends Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    const { numeroDeCliques } = this.state
    this.setState((estadoInicial, _propes) => ({
      numeroDeCliques: estadoInicial.numeroDeCliques + 1,
    }),() => {
      console.log(`Clique Exemplo05: ${this.getButtonColor(numeroDeCliques)}`);
    });
  };

  getButtonColor(num){
    return num % 2 === 0 ? 'green':'white';
  };

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <button 
        type='button'
        style={ { backgroundColor: this.getButtonColor(numeroDeCliques) } }
        onClick={this.handleClick}
        className='button'>{numeroDeCliques}
      </button>
    )
  };
};

export default Exemplo05;