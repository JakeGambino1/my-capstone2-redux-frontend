import React, { Component } from 'react';
import DeleteActionListItem from './DeleteActionListItem';

class ActionListItem extends Component {
  render() {
    return this.props.actionListItems.map((actionItem, i) => (
      <tr>
        <td>
          <label>
            <input
              key={'input' + i}
              onChange={this.props.markComplete}
              type="checkbox"
            />
            <span></span>
          </label>
        </td>
        <td key={i}>{actionItem.title}</td>
        <td>
          <DeleteActionListItem key={i} actionListItemId={actionItem._id} />
        </td>
      </tr>
    ));
  }
}

export default ActionListItem;
