import { USER_RETRIEVED } from '../constants/action-types';

export function findCurrentUser({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === USER_RETRIEVED) {
        console.log('payload from middleware:');
        console.log(action.payload);
      }
      return next(action);
    };
  };
}
