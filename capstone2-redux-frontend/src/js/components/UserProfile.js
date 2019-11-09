import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};

const ConnectedProfile = ({ currentUser }) => (
  <div className="row">
    <div className="center">
      <img
        className="circle responsive-img"
        src={currentUser.avatar}
        alt="current user headshot"
      />
      <p className="flow-text">
        Name: {currentUser.firstName} {currentUser.lastName}
      </p>
      <p className="flow-text">Email: {currentUser.email}</p>
      <p className="flow-text">Interests: {currentUser.interests}</p>
      <p className="flow-text">Bio: {currentUser.bio}</p>
      <p className="flow-text">
        Youtube: <a href={currentUser.youtube}>{currentUser.youtube}</a>
      </p>
      <p className="flow-text">
        LinkedIn: <a href={currentUser.linkedin}>{currentUser.linkedin}</a>
      </p>
    </div>
  </div>
);

const UserProfile = connect(mapStateToProps)(ConnectedProfile);

export default UserProfile;
