// import React from 'react';
// import { connect } from 'react-redux';
// import { getPendingMentors } from '../actions/index';

// function mapDispatchToProps(dispatch) {
//   return {
//     getPendingMentors: users => dispatch(getPendingMentors(users))
//   };
// }

// const mapStateToProps = state => {
//   return { pendingMentors: state.pendingMentors };
// };

// const doTheThing = () => {
//   console.log('still trying to do the thing');
// };

// const ConnectedList = ({ pendingMentors, i }) => (
//   <div>
//     <ul>
//       {pendingMentors.map(el => (
//         <li key={i}>
//           <div>
//             <h4 key={'name ' + i}>
//               Pending Mentor:
//               {el.firstName} {el.lastName}
//             </h4>
//           </div>
//         </li>
//       ))}
//     </ul>
//     <button onClick={doTheThing}>Do the Thing</button>
//   </div>
// );

// const PendingMentorList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ConnectedList);

// export default PendingMentorList;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPendingMentors } from '../actions/index';

export class Post extends Component {
  componentDidMount() {
    this.props.getPendingMentors();
  }
  render() {
    return (
      <ul>
        {this.props.pendingMentors.map(el => (
          <li key={el.id}>
            Name: {el.firstName} {el.lastName}
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    pendingMentors: state.pendingMentors
  };
}

export default connect(
  mapStateToProps,
  { getPendingMentors }
)(Post);
