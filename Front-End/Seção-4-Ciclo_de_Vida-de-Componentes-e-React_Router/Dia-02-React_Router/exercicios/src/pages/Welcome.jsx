import React, { Component } from 'react'
import "../App.css"

class Welcome extends Component {
    render() {
        const { history } = this.props;
        const { location } = history;
        return (
            <div className="container">
                <h1>Boas Vindas</h1>
                <h2>
                    { location.state ? location.state.userName : 'Pessoa desconhecida' }
                </h2>
                <button
                  className="button"
                  type="button"
                  onClick={ () => console.log(history) }
                  >
                    History
                  </button>
            </div>
        )
    }
}
export default Welcome;