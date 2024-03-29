import {
  POST_CREATED,
  ADD_USER,
  USER_RETRIEVED,
  PENDING_MENTORS_RETRIEVED,
  REQUEST_MENTOR_STATUS,
  PENDING_MENTOR_APPROVED,
  PENDING_MENTOR_DENIED,
  POST_LIKED,
  REMOVE_NEW_FROM_POST
} from '../constants/action-types';
import axios from 'axios';

export function addPost(payload) {
  console.log('AddPost action');
  return function(dispatch) {
    dispatch({ type: POST_CREATED, payload });
  };
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
  console.log('loginUser action');
  return function(dispatch) {
    return axios.get('http://localhost:5000/api/users').then(res => {
      const currentUser = res.data.find(res => res.email === payload.email);
      dispatch({ type: USER_RETRIEVED, payload: currentUser });
    });
  };
}

export function getPendingMentors() {
  console.log('pending mentors action');
  return function(dispatch) {
    return axios.get('http://localhost:5000/api/users/').then(res => {
      const pendingMentors = res.data.filter(
        res => res.requestToBeMentor === true
      );
      console.log(pendingMentors);
      dispatch({ type: PENDING_MENTORS_RETRIEVED, payload: pendingMentors });
    });
  };
}

export function requestToBeMentor(payload) {
  console.log('request to be a mentor action');
  console.log(payload);
  return function(dispatch) {
    return axios
      .get(`http://localhost:5000/api/users/${payload}`)
      .then(dispatch({ type: REQUEST_MENTOR_STATUS, payload }));
  };
}

export function approveUserToBeMentor(payload) {
  console.log(`user ${payload} request has been approved`);
  return function(dispatch) {
    return axios
      .get(`http://localhost:5000/api/users/${payload}`)
      .then(dispatch({ type: PENDING_MENTOR_APPROVED, payload }));
  };
}

export function denyUserToBeMentor(payload) {
  console.log(`user ${payload} request has been denied`);
  return function(dispatch) {
    return axios
      .get(`http://localhost:5000/api/users/${payload}`)
      .then(dispatch({ type: PENDING_MENTOR_DENIED, payload }));
  };
}

export function likePost(payload) {
  console.log(`post ${payload} is getting popular!`);
  axios.put(`http://localhost:5000/api/posts/like/${payload}`);
  return function(dispatch) {
    console.log('make it here?');
    dispatch({ type: POST_LIKED, payload });
  };
}

export function removeNewFromPost(payload) {
  console.log(`post ${payload} is no longer new`);
  axios.put(`http://localhost:5000/api/posts/${payload}`, {
    isNewPost: false
  });
  return function(dispatch) {
    console.log('made it to removeNewFromPost dispatch??');
    dispatch({ type: REMOVE_NEW_FROM_POST, payload });
  };
}
