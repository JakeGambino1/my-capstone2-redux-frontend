import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/index';

const mapStateToProps = state => {
  return { posts: state.posts };
};

const removeNotification = e => {
  console.log(`remove notification from post ${e.target.name}`);
};

const ConnectedList = ({ posts, i }) => (
  <ul>
    {posts.map(el => (
      <li key={i}>
        <div>
          <h4 key={'title ' + i}>{el.title}</h4>
          <h5 key={'content ' + i}>{el.content}</h5>
          {el.isNewPost ? (
            <button onClick={removeNotification} name={el._id}>
              This will be a badge
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const PostList = connect(
  mapStateToProps,
  { getPosts }
)(ConnectedList);

export default PostList;
