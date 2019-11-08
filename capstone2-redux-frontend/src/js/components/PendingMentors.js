import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPendingMentors } from '../actions/index';

export class PendingMentors extends Component {
  componentDidMount() {
    this.props.getPendingMentors();
  }

  render() {
    const approveUser = e => {
      console.log('approveUser called');
      e.preventDefault();
      console.log(`approver user ${e.target.name}`);
    };

    const changeMentorStatus = e => {
      e.preventDefault();
      console.log(`user ${e.target.name} is requesting to be a mentor`);
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
      this.props.currentUser.isAdmin === false
    ) {
      return (
        <button onClick={changeMentorStatus} name={this.props.currentUser._id}>
          I want to become a mentor
        </button>
      );
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
  { getPendingMentors }
)(PendingMentors);
