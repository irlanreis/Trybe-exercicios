import React, { Component } from 'react'

class UserImage extends Component {
  render() {
    const { source, alternativeText } = this.props;

    return (
        <img src={ source } alt={ alternativeText }/>
    )
  }
}
export default UserImage;
