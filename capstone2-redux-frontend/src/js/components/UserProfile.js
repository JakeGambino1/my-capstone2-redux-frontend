import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};

const ConnectedProfile = ({ currentUser }) => (
  <div className="row">
    <p>
      Name: {currentUser.firstName} {currentUser.lastName}
    </p>
    <p>email: {currentUser.email}</p>
    <p>Interests: {currentUser.interests}</p>
    <p>Bio: {currentUser.bio}</p>
    <p>Youtube: {currentUser.youtube}</p>
    <p>LinkedIn: {currentUser.linkedin}</p>
  </div>
);

const UserProfile = connect(mapStateToProps)(ConnectedProfile);

export default UserProfile;
