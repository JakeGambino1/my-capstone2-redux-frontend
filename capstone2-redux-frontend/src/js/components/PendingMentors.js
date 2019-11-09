import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPendingMentors,
  requestToBeMentor,
  approveUserToBeMentor,
  denyUserToBeMentor
} from '../actions/index';

export class PendingMentors extends Component {
  componentDidMount() {
    this.props.getPendingMentors();
  }

  render() {
    const approveUser = e => {
      console.log('approveUser called');
      e.preventDefault();
      console.log(`approver user ${e.target.name}`);
      this.props.approveUserToBeMentor(e.target.name);
    };

    const denyUser = e => {
      console.log('denyUser called');
      e.preventDefault();
      console.log(`deny user ${e.target.name}`);
      this.props.denyUserToBeMentor(e.target.name);
    };

    const changeMentorStatus = e => {
      e.preventDefault();
      console.log(`user ${e.target.name} is requesting to be a mentor`);
      this.props.requestToBeMentor(e.target.name);
    };
    if (
      (this.props.currentUser.isAdmin === undefined ||
        this.props.currentUser.isAdmin === false) &&
      this.props.currentUser.isMentor === undefined
    ) {
      return <p>only admins can view pending mentor requests</p>;
    }
    if (
      this.props.currentUser.isMentor === false &&
      this.props.currentUser.isAdmin === false &&
      this.props.currentUser.requestToBeMentor === false
    ) {
      return (
        <button onClick={changeMentorStatus} name={this.props.currentUser._id}>
          I want to become a mentor
        </button>
      );
    }
    if (this.props.currentUser.requestToBeMentor === true) {
      return <p>Your request is pending approval</p>;
    }
    if (this.props.currentUser.isMentor === true) {
      return <p>You are a mentor!</p>;
    }
    if (this.props.currentUser.isAdmin) {
      return (
        <ul>
          {this.props.pendingMentors
            .filter(el => el !== null)
            .map(el => (
              <li>
                Name: {el.firstName} {el.lastName}{' '}
                <button name={el._id} onClick={approveUser}>
                  Approve User
                </button>
                <button name={el._id} onClick={denyUser}>
                  Deny User
                </button>
              </li>
            ))}
        </ul>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    pendingMentors: state.pendingMentors,
    currentUser: state.currentUser
  };
}

export default connect(
  mapStateToProps,
  {
    getPendingMentors,
    requestToBeMentor,
    approveUserToBeMentor,
    denyUserToBeMentor
  }
)(PendingMentors);
