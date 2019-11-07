import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addPost: post => dispatch(addPost(post))
  };
}

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      interests: [],
      bio: '',
      youtube: '',
      linkedin: ''
    };
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      interests,
      bio,
      youtube,
      linkedin
    } = this.state;
    return (
      <div>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>email: {email}</p>
        <p>Interests: {interests}</p>
        <p>Bio: {bio}</p>
        <p>Youtube: {youtube}</p>
        <p>LinkedIn: {linkedin}</p>
      </div>
    );
  }
}

const UserProfile = connect(
  null,
  mapDispatchToProps
)(UserInfo);

export default UserProfile;
