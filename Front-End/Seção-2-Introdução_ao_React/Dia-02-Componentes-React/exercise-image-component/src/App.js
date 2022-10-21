import React, { Component } from 'react'
import Image from './components/Image'
import cat from './components/cat.jpg'

class App extends Component {
  render() {
    return (
      <main>
        <Image source={ cat } alternativeText="Cute cat staring" />
      </main>
    );
  }
}
export default App;