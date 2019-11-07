import { ADD_POST, USER_RETRIEVED } from '../constants/action-types';

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
  if (action.type === USER_RETRIEVED) {
    console.log(action.payload);
    return Object.assign({}, state, {
      currentUser: action.payload
    });
  }
  return state;
}

export default rootReducer;
