import {
  USER_RETRIEVED,
  PENDING_MENTORS_RETRIEVED,
  POST_CREATED,
  REQUEST_MENTOR_STATUS,
  PENDING_MENTOR_APPROVED,
  PENDING_MENTOR_DENIED,
  POST_LIKED
} from '../constants/action-types';
import axios from 'axios';
import store from '../store/index';

export function middlewareFunctions({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === USER_RETRIEVED) {
        console.log('findUser middleware:');
        console.log(action.payload);
      }
      if (action.type === POST_CREATED) {
        console.log('POST_CREATED middleware');
        axios.post('http://localhost:5000/api/posts', {
          user: store.getState().currentUser._id,
          title: action.payload.title,
          content: action.payload.content
        });
      }
      if (action.type === REQUEST_MENTOR_STATUS) {
        console.log('REQUEST_MENTOR_STATUS middleware');
        axios.put(`http://localhost:5000/api/users/${action.payload}`, {
          requestToBeMentor: true
        });
      }
      if (action.type === PENDING_MENTOR_APPROVED) {
        console.log('PENDING_MENTOR_APPROVED middleware');
        axios.put(`http://localhost:5000/api/users/${action.payload}`, {
          requestToBeMentor: false,
          isMentor: false
        });
      }
      if (action.type === PENDING_MENTOR_DENIED) {
        console.log('PENDING_MENTOR_DENIED middleware');
        axios.put(`http://localhost:5000/api/users/${action.payload}`, {
          requestToBeMentor: false,
          isMentor: true
        });
      }
      if (action.type === POST_LIKED) {
        console.log(`POST_LIKED middleware ${action.payload}`);
        axios.put(`http://localhost:5000/api/posts/like/${action.payload}`);
      }
      return next(action);
    };
  };
}

export function findPendingMentors({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === PENDING_MENTORS_RETRIEVED) {
        console.log('mentors middleware:');
        console.log(action.payload);
      }
      return next(action);
    };
  };
}
