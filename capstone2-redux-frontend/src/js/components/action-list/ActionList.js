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

  markComplete = id => {
    this.setState({
      actionListItems: this.state.actionListItems.map(actionItem => {
        if (actionItem.id === id) {
          actionItem.completed = !actionItem.completed;
        }
        return actionItem;
      })
    });
  };

  render() {
    return (
      <section>
        <AddActionListItem
          addActionListItem={this.addActionListItem.bind(this)}
        />
        <table>
          <thead>
            <tr>
              <th className="center">Completed?</th>
              <th className="center">Name of Task</th>
              <th className="center">Delete Item</th>
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
      </section>
    );
  }
}

export default ActionList;
