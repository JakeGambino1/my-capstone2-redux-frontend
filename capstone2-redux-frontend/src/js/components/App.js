import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './PostList';
import PostForm from './PostForm';
import Post from './Posts';
import UserForm from './AddUserForm';
import LoginUser from './LoginUser';
import UserProfile from './UserProfile';
import PendingMentors from './PendingMentors';
import Navbar from './Navbar';

const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <section id="login">
        <h2 className="center">Login</h2>
        <LoginUser />
      </section>
      <section id="register-user">
        <h2 className="center">Register A User</h2>
        <UserForm />
      </section>
      <h2 className="center">Posts</h2>
      <section id="posts">
        <Post />
        <PostList />
      </section>
      <section id="add-post">
        <h2 className="center">Add a new Post</h2>
        <PostForm />
      </section>
      <section id="profile">
        <h2 className="center">User Profile</h2>
        <UserProfile />
      </section>
      <section id="mentor">
        <h2 className="center">Mentor Space</h2>
        <PendingMentors />
      </section>
    </div>
  </Router>
);

export default App;
