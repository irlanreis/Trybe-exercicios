import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  state = {
    email: '',
    saveEmail: '',
  }

  changeEmail = (value) => {
    this.setState({ email: value })
  }

  changeSaveEmail = (value) => {
    this.setState({ saveEmail: value, email: '', })
  }

  render() {
    const { email, saveEmail } = this.state
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img
              src={ logo }
              className="App-logo"
              alt="logo"
            />
            <div>
              <label
                htmlFor="id-email"
                className="container-label-email"
              >
                Email:
                <input
                  value={ email }
                  id="id-email"
                  type="email"
                  placeholder="Digite seu email"
                  onChange={ (e) => this.changeEmail(e.target.value) }
                />
              </label>
              <input
                value="Enviar"
                id="btn-send"
                data-testid="id-send"
                type="button"
                onClick={ () => this.changeSaveEmail(email) }
              />
              <input
                value="Voltar"
                id="btn-back"
                type="button"
              />
            </div>
            <ValidEmail
              email={ saveEmail } />
          </header>
        </div>
      </>
    );
  }
}

export default App;
