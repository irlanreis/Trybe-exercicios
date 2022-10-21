import React, { Component } from 'react'
import UserImage from './userImage';

class UserProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <UserImage source={user.avatar} alternativeText="user avatar"/>;
      </div>
    )
  }
}
export default UserProfile;