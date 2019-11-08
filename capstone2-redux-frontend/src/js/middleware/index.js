import {
  USER_RETRIEVED,
  PENDING_MENTORS_RETRIEVED,
  POST_CREATED
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
