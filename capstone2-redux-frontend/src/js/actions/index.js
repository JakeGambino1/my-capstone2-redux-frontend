import { ADD_POST } from '../constants/action-types';
import { ADD_USER } from '../constants/action-types';
import axios from 'axios';

export function addPost(payload) {
  return { type: ADD_POST, payload };
}

export function getData() {
  return function(dispatch) {
    return axios.get('http://localhost:5000/api/posts/').then(res => {
      console.log(res);
      dispatch({ type: 'DATA_LOADED', payload: res });
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
