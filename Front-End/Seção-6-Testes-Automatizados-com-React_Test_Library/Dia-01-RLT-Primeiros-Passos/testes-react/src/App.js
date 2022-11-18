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

    this.setState({
      saveEmail: value,
      email: ''
    })
  }

  render() {
    const { email, saveEmail } = this.state
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img
              src={logo}
              className="App-logo"
              alt="logo"
            />
              <label
                htmlFor="id-email"
                className="label-email"
              >
                Email:
              </label>
            <div className="container-email">
              <div htmlFor="id-email" className="label-placeholder-copy">Digite seu email</div>
                <input
                  value={email}
                  id="id-email"
                  type="email"
                  required
                  // pattern=".+ .+"
                  placeholder="Digite seu email"
                  onChange={(e) => this.changeEmail(e.target.value)}
                />
              <p className="warning">Preencha com email válido!</p>
            </div>
            <div className="container-buttons">
              <input
                value="Enviar"
                id="btn-send"
                data-testid="id-send"
                type="button"
                onClick={() => this.changeSaveEmail(email)}
              />
              <input
                value="Voltar"
                id="btn-back"
                type="button"
              />
            </div>
            <ValidEmail
              email={saveEmail} />
          </header>
        </div>
      </>
    );
  }
}

export default App;
