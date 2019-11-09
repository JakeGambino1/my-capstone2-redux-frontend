import React from 'react';
import { connect } from 'react-redux';
import { likePost } from '../actions/index';

const mapStateToProps = state => {
  return { posts: state.posts };
};

const removeNotification = e => {
  console.log(`remove notification from post ${e.target.name}`);
};

const likeThisPost = e => {
  e.preventDefault();
  likePost(e.target.name);
};

// add conditional check for length

const ConnectedList = ({ posts, i }) => (
  <ul>
    {posts.map(el => (
      <li key={i}>
        <div>
          <h4 key={'title ' + i}>
            {el.title}
            {el.isNewPost ? (
              <span
                onClick={removeNotification.bind(this)}
                class="collection-item"
              >
                <span class="new badge"></span>
              </span>
            ) : (
              <div></div>
            )}
          </h4>
          <h5 key={'content ' + i}>{el.content}</h5>
          <button
            className="btn"
            name={el._id}
            onClick={likeThisPost.bind(this)}
          >
            <i className="material-icons">thumb_up</i>{' '}
            {el.likes !== undefined ? el.likes.length : null}
          </button>
        </div>
      </li>
    ))}
  </ul>
);

const PostList = connect(
  mapStateToProps,
  { likePost }
)(ConnectedList);

export default PostList;
