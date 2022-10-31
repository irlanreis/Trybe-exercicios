import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class FormExemplo extends Component {
  constructor() {    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    }
  }

  handleChange({ target }) {
    const { name, value } = target
    const { email, password } = this.state;
    this.setState({[name]: value,}, () => {
      const buttonIsDisabled = email.length === 0 || password.length === 0;

      this.setState({
        buttonDisabled: buttonIsDisabled,
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    alert(`Foi feito login com o email ${email} e a senha ${password}.`)
  }

  render() {

    const { email, password, buttonDisabled } = this.state

    return (
      <>
        <div>
          <h1>Formulário de Treino</h1>
        </div>
        <form onSubmit={ this.handleSubmit }>
          <h2>Login</h2>
          <EmailInput email={ email } handleChange={this.handleChange}/>
          <PasswordInput password={ password } handleChange={this.handleChange}/>

          <button disabled={buttonDisabled}>Iniciar</button>
        </form>
      </>
    );
  }
}
export default FormExemplo;