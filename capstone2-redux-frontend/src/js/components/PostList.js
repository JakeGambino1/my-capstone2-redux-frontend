import React from 'react';
import { connect } from 'react-redux';
import { likePost } from '../actions/index';

const mapStateToProps = state => {
  return { posts: state.posts };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     likePost: post => dispatch(likePost(post)),
//     getPosts: posts => dispatch(getPosts(posts))
//   };
// };

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
          <h4 key={'title ' + i}>{el.title}</h4>
          <h5 key={'content ' + i}>{el.content}</h5>
          <button name={el._id} onClick={likeThisPost.bind(this)}>
            Like Post {el.likes.length}
          </button>
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
  { likePost }
)(ConnectedList);

export default PostList;
