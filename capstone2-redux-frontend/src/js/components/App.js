import React from 'react';
import PostList from './PostList';
import PostForm from './PostForm';

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
  </>
);

export default App;
