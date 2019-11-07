import { GET_USER } from '../constants/action-types';

export function findCurrentUser({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === GET_USER) {
        console.log('haaaalp');
      }
      return next(action);
    };
  };
}
