import React from 'react';
import PostList from './PostList';
import PostForm from './PostForm';
import Post from './Posts';
import UserForm from './AddUserForm';
import LoginUser from './LoginUser';
import UserProfile from './UserProfile';

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
    <div>
      <h2>Login</h2>
      <LoginUser />
    </div>
    <div>
      <h2>User Profile</h2>
      <UserProfile />
    </div>
  </>
);

export default App;
