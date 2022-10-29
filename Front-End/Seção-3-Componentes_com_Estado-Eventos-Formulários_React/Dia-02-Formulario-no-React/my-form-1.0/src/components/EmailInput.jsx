import React, { Component } from 'react'

class EmailInput extends Component {
    render() {

        const { handleChange } = this.props;

        return (
            <label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Digite seu email"
                    onChange={handleChange}
                />
            </label>
        )
    }
}
export default EmailInput;