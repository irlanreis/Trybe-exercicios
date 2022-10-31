import React, { Component } from 'react'

class PasswordInput extends Component {
  render() {

    const { handleChange } = this.props;


    return (
      <label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          onChange={handleChange}
        />
      </label>
    )
  }
}
export default PasswordInput;