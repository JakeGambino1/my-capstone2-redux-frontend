import React from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import Post from './Posts';
import UserForm from './AddUserForm';

const App = () => (
  <>
    <div>
      <h2>Posts</h2>
      <PostList />
    </div>
    <div>
      <h2>Add a new Post</h2>
      <PostForm />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>
    <div>
      <h2>Add User</h2>
      <UserForm />
    </div>
  </>
);

export default App;
