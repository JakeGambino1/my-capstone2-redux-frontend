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
import ActionList from './action-list/ActionList';

const App = () => (
  <Router>
    <Navbar />
    <>
      <div id="login-register-container">
        <div className="container">
          <section id="login">
            <h4 className="center">Login</h4>
            <LoginUser />
          </section>
          <section id="register-user">
            <h4 className="center">Register A User</h4>
            <UserForm />
          </section>
        </div>
      </div>
      <div id="user-specific-info" className="container hide">
        <section id="profile">
          <UserProfile />
        </section>
        <section id="mentor" className="center">
          <h4 className="center">Mentor Space</h4>
          <PendingMentors />
        </section>
      </div>
      <div className="row">
        <div className="col m6">
          <h4 className="center">Posts</h4>
          <section id="posts">
            <Post />
            <PostList />
          </section>
        </div>
        <div className="col m6">
          <h4 className="center">Action List</h4>
          <section id="action-list">
            <ActionList />
          </section>
        </div>
        <section id="add-post">
          <h4 className="center">Add a new Post</h4>
          <PostForm />
        </section>
      </div>
    </>
  </Router>
);

export default App;
