import { ADD_POST } from '../constants/action-types';

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
  return state;
}

export default rootReducer;
