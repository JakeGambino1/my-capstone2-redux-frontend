import React, { Component } from 'react';
import DeleteActionListItem from './DeleteActionListItem';

class ActionListItem extends Component {
  // getStyle = () => {
  //   return {
  //     background: '#f4f4f4',
  //     padding: '10px',
  //     borderBottom: '1px #ccc dotted',
  //     textDecoration: this.props.todo.completed ? 'line-through' : 'none'
  //   };
  // };
  render() {
    return this.props.actionListItems.map((actionItem, i) => (
      <tr>
        <td className="center">
          <label>
            <input
              key={'input' + i}
              onChange={this.props.markComplete}
              type="checkbox"
            />
            <span></span>
          </label>
        </td>
        <td className="center" key={i}>
          {actionItem.title}
        </td>
        <td className="center">
          <DeleteActionListItem key={i} actionListItemId={actionItem._id} />
        </td>
      </tr>
    ));
  }
}

// TodoItem.propTypes = {
//   actionItem: PropTypes.object.isRequired,
//   markComplete: PropTypes.func.isRequired
// };

export default ActionListItem;
