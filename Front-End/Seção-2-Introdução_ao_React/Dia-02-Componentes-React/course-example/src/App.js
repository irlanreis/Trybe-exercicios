import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {

    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => (<li key={index}>{item}</li>))

    return (
      <div>
        <h2 className='title-h2'>Lista de compra</h2>
        <ul className='ul-elements'>
          {items}
        </ul>
      </div>
    )
  }
}
export default App;