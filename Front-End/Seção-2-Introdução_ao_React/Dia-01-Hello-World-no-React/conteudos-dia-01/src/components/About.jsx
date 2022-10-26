import React, { Component } from 'react'


class info extends Component {
  render() {

    const lis = ['Git', 'JavaScript', 'HTML', 'PDI', 'Gestão de Tempo', 'CSS', 'Testes Unitários'];

    return (
      <div>
        <h1 className='info'>Irlan Reis</h1>
        <p>Estudo na Trybe hà dois meses e meio</p>
        <h2>Minhas Habilidades</h2>
        <ul>
          {lis.map((element, index) => <li key={index}> {element} </li>)}
        </ul>
      </div>
    )
  }
}
export default info;