import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { posts: state.posts };
};

const ConnectedList = ({ posts, i }) => (
  <ul>
    {posts.map(el => (
      <li key={i}>
        <div>
          <h4 key={'title ' + i}>{el.title}</h4>
          <h5 key={'content ' + i}>{el.content}</h5>
        </div>
      </li>
    ))}
  </ul>
);

const PostList = connect(mapStateToProps)(ConnectedList);

export default PostList;
