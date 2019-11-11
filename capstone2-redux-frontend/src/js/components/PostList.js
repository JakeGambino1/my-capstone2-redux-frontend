import React from 'react';
import { connect } from 'react-redux';
import { likePost, removeNewFromPost } from '../actions/index';

const mapStateToProps = state => {
  return { posts: state.posts };
};

const removeNotification = e => {
  e.preventDefault();
  console.log(`remove notification from post ${e.target.getAttribute('name')}`);
  removeNewFromPost(e.target.getAttribute('name'));
};

const likeThisPost = e => {
  e.preventDefault();
  likePost(e.target.name);
};

// add conditional check for length

const ConnectedList = ({ posts, i }) => (
  <ul>
    {posts.map(el => (
      <article>
        <li key={i}>
          <div>
            <h5 key={'title ' + i}>
              {el.title}
              {el.isNewPost ? (
                <span
                  name={el._id}
                  onClick={removeNotification}
                  class="collection-item"
                >
                  <span name={el._id} class="new badge">
                    this is
                  </span>
                </span>
              ) : (
                <div></div>
              )}
            </h5>
            <h6 key={'content ' + i}>{el.content}</h6>
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
      </article>
    ))}
  </ul>
);

const PostList = connect(
  mapStateToProps,
  { likePost, removeNewFromPost }
)(ConnectedList);

export default PostList;
