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
      e.preventDefault();
      console.log(`approver user ${e.target.name}`);
      this.props.approveUserToBeMentor(e.target.name);
    };

    const denyUser = e => {
      e.preventDefault();
      console.log(`deny user ${e.target.name}`);
      this.props.denyUserToBeMentor(e.target.name);
    };

    const changeMentorStatus = e => {
      e.preventDefault();
      console.log(`user ${e.target.name} is requesting to be a mentor`);
      this.props.requestToBeMentor(e.target.name);
    };

    // <table>
    //   <thead>
    //     <tr>
    //       <th>Name of User</th>
    //       <th>Approve User</th>
    //       <th>Deny User</th>
    //     </tr>
    //     <tr>

    //     </tr>
    //   </thead>
    // </table>
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
        <button
          className="btn"
          onClick={changeMentorStatus}
          name={this.props.currentUser._id}
        >
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
        <article>
          <ul>
            {this.props.pendingMentors
              .filter(el => el !== null)
              .map(el => (
                <li>
                  Name: {el.firstName} {el.lastName}{' '}
                  <button className="btn" name={el._id} onClick={approveUser}>
                    Approve User
                  </button>
                  <button className="btn" name={el._id} onClick={denyUser}>
                    Deny User
                  </button>
                </li>
              ))}
          </ul>
        </article>
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
