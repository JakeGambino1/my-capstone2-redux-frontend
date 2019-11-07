import {
  ADD_POST,
  ADD_USER,
  USER_RETRIEVED,
  PENDING_MENTORS_RETRIEVED
} from '../constants/action-types';
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
      const currentUser = res.data.find(res => res.email === payload.email);
      dispatch({ type: USER_RETRIEVED, payload: currentUser });
    });
  };
}

export function getPendingMentors() {
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
