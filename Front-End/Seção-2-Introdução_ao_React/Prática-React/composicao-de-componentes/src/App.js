import React, { Component } from 'react'
import './App.css'
import Saiyajins from './components/Saiyajins';

const url = 'https://dragon-ball-api.herokuapp.com/api/' 
const response = fetch(url)
    console.log(response);
class App extends Component {
  render() {
    

    return (
      <div classname="App">
      < Saiyajins />
      </div>
    );
  }
}


export default App;
