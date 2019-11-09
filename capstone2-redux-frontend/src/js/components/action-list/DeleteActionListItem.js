import React, { Component } from 'react';
import axios from 'axios';

class DeleteActionListItem extends Component {
  handleDelete(e) {
    axios.delete('http://localhost:5000/api/action-list/' + e.target.name);
  }
  render() {
    const data = this.props.actionListItemId;
    return (
      <div>
        <button onClick={this.handleDelete} name={data} className="btn">
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteActionListItem;
