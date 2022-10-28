import React, { Component } from 'react'

function handleClick1() {
  console.log('Clicou Botão 1');
}
function handleClick2() {
  console.log('Clicou Botão 2');
}
function handleClick3() {
  console.log('Clicou Botão 3');
}
class Exemplo01 extends Component {
  render() {
    return (
      <>
      <button onClick={handleClick1}>Botão 1</button>
      <button onClick={handleClick2}>Botão 2</button>
      <button onClick={handleClick3}>Botão 3</button>
      </>
    )
  }
}
export default Exemplo01;
/**
 * função que exempifica o jeito errado/menos eficiente de adicionar eventos à elementos no React.
 */