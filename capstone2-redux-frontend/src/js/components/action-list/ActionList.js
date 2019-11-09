import React, { Component } from 'react';
import axios from 'axios';
import ActionListItem from './ActionListItem';
import AddActionListItem from './AddActionListItem';

class ActionList extends Component {
  state = {
    actionListItems: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/action-list/')
      .then(res => this.setState({ actionListItems: res.data }));
  }

  deleteActionListItem = id => {
    axios
      .delete(`http://localhost:5000/api/action-list/${id}`)
      .then(res => {
        this.setState({
          actionListItems: [
            ...this.state.actionListItems.filter(
              actionItem => actionItem.id !== id
            )
          ]
        });
      })
      .catch(err => console.error(err));
  };

  addActionListItem = title => {
    console.log(this.state.actionListItems);
    axios
      .post(`http://localhost:5000/api/action-list/`, {
        title,
        isComplete: false
      })
      .then(res => {
        this.setState({
          actionListItems: [...this.state.actionListItems, res.data]
        });
      });
    console.log(this.state.actionListItems);
  };

  markComplete = e => {
    let completeStyle = {
      textDecoration: 'line-through'
    };
    e.target.style = completeStyle;
    console.log(e.target.style.textDecoration);
  };

  render() {
    return (
      <div>
        <AddActionListItem
          addActionListItem={this.addActionListItem.bind(this)}
        />
        <table>
          <thead>
            <tr>
              <th>Completed?</th>
              <th>Name of Task</th>
              <th>Delete Item</th>
            </tr>
          </thead>

          <tbody>
            <ActionListItem
              actionListItems={this.state.actionListItems}
              markComplete={this.markComplete.bind(this)}
              deleteActionListItem={this.deleteActionListItem.bind(this)}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActionList;
