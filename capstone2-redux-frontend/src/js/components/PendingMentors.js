// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getPendingMentors } from '../actions/index';
// import { findCurrentUser } from '../middleware';

// function mapStateToProps(state) {
//   return {
//     pendingMentors: state.pendingMentors,
//     currentUser: state.currentUser
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     findCurrentUser: currentUser => dispatch(findCurrentUser(currentUser))
//   };
// }

// class PendingMentors extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     pendingMentors: getPendingMentors(),
//   //     currentUser: this.state.currentUser
//   //   };
//   // }

//   componentDidMount() {
//     this.props.getPendingMentors();
//   }

//   render() {
//     if (this.currentUser === undefined) {
//       console.log(this.currentUser);
//       console.log(this.props.pendingMentors);
//       return (
//         <div>
//           <p>You must be an admin to see pending requests</p>
//         </div>
//       );
//     }

//     console.log(this.props.currentUser);
//     if (this.currentUser.isAdmin) {
//       return (
//         <ul>
//           {this.props.pendingMentors.map(el => (
//             <li key={el.id}>
//               Name: {el.firstName} {el.lastName}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PendingMentors);

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

    if (
      this.props.currentUser.isAdmin === undefined ||
      this.props.currentUser.isAdmin === false
    ) {
      return <p>currentUser undefined, no mentor requests will be rendered</p>;
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
