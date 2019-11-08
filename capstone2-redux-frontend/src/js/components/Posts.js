import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';

export class Post extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getPosts }
)(Post);
