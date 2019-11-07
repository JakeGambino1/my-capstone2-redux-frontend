import { ADD_POST, GET_USER } from '../constants/action-types';

const initialState = {
  posts: [],
  remotePosts: [],
  currentUser: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }
  if (action.type === 'DATA_LOADED') {
    return Object.assign({}, state, {
      remotePosts: state.remotePosts.concat(action.payload)
    });
  }
  if (action.type === GET_USER) {
    return Object.assign({}, state, {
      currentUser: action.payload
    });
  }
  return state;
}

export default rootReducer;
