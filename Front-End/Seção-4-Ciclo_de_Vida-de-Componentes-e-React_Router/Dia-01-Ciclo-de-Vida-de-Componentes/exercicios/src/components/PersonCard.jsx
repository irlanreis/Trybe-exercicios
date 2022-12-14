import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css'

class PersonCard extends Component {
  render() {
    const { person: { name, email, age, image } } = this.props;
    return (
      <div className="container">
        <p>{name}</p>
        <p>{email}</p>
        <p>{age}</p>
        <img src={ image } alt={ name } className="img"/>
      </div>
    )
  }
}

PersonCard.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};
export default PersonCard