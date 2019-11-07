import { ADD_POST, ADD_USER, USER_RETRIEVED } from '../constants/action-types';
import axios from 'axios';

export function addPost(payload) {
  return { type: ADD_POST, payload };
}

export function getPosts() {
  return function(dispatch) {
    return axios.get('http://localhost:5000/api/posts/').then(res => {
      console.log(res);
      dispatch({ type: 'DATA_LOADED', payload: res.data });
    });
  };
}

export function addUser(payload) {
  console.log(payload);
  return function(dispatch) {
    return (
      axios
        // .post('http://localhost:5000/api/users/', { payload })
        .post('http://localhost:5000/api/users/', {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          password: payload.password,
          interests: payload.interests,
          bio: payload.bio,
          youtube: payload.youtube,
          linkedin: payload.linkedin
        })
        .then(res => {
          console.log(res);
          dispatch({ type: ADD_USER, payload: res });
        })
    );
  };
}

export function loginUser(payload) {
  console.log('loginUser payload =');
  console.log(payload);
  return function(dispatch) {
    return axios.get('http://localhost:5000/api/users').then(res => {
      // I want to get rid of this filter logic and handle it in a middleware
      console.log('result of axios.get from loginUser:');
      console.log(res);
      const currentUser = res.data.find(res => res.email === payload.email);
      console.log('loginUser currentUser:');
      console.log(currentUser);
      dispatch({ type: USER_RETRIEVED, payload: currentUser });
    });
  };
}
