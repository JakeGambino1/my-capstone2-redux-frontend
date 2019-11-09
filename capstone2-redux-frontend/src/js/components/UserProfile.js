import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};

const ConnectedProfile = ({ currentUser }) => (
  <div className="row">
    <div className="col m4">
      <img
        className="circle responsive-img"
        src={currentUser.avatar}
        alt="current user headshot"
      />
    </div>
    <div className="col m8">
      <div className="center">
        <p>
          Name: {currentUser.firstName} {currentUser.lastName}
        </p>
        <p>Email: {currentUser.email}</p>
        <p>Interests: {currentUser.interests}</p>
        <p>Bio: {currentUser.bio}</p>
        <p>Youtube: {currentUser.youtube}</p>
        <p>LinkedIn: {currentUser.linkedin}</p>
      </div>
    </div>
  </div>
);

const UserProfile = connect(mapStateToProps)(ConnectedProfile);

export default UserProfile;
