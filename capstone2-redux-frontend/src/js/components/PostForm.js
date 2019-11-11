import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addPost: post => dispatch(addPost(post))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;
    this.props.addPost({ title, content });
    this.setState({ title: '', content: '' });
  };

  render() {
    const { title, content } = this.state;
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              className="materialize-textarea"
              type="textarea"
              id="content"
              value={content}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn" type="submit">
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

const PostForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default PostForm;
