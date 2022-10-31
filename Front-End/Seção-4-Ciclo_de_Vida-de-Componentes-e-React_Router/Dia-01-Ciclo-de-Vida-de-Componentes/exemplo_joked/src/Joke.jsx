import React, { Component } from 'react'

class Joke extends Component {
  render() {
    const { jokeObj, saveJoke } = this.props;

    return (
      <div>
        <p>{jokeObj.joke}</p>
        <button type="button" onClick={saveJoke}>
          Salvar piada
        </button>
      </div>
    )
  }
}
export default Joke;