import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';

export class Post extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    return (
      <ul>
        {this.props.posts.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.remotePosts.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getPosts }
)(Post);
