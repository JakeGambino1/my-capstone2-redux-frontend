import {
  ADD_POST,
  USER_RETRIEVED,
  PENDING_MENTORS_RETRIEVED,
  POST_CREATED,
  REQUEST_MENTOR_STATUS,
  POST_LIKED
} from '../constants/action-types';

const initialState = {
  posts: [],
  remotePosts: [],
  pendingMentors: [],
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
      posts: state.posts.concat(action.payload)
    });
  }
  if (action.type === USER_RETRIEVED) {
    console.log('USER_RETRIEVED reducer');
    return Object.assign({}, state, {
      currentUser: action.payload,
      pendingMentors: state.pendingMentors.concat(null)
    });
  }
  if (action.type === PENDING_MENTORS_RETRIEVED) {
    console.log('PENDING_MENTORS_RETRIEVED reducer');
    return Object.assign({}, state, {
      pendingMentors: state.pendingMentors.concat(action.payload)
    });
  }
  if (action.type === POST_CREATED) {
    console.log('POST_CREATED reducer');
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }
  if (action.type === REQUEST_MENTOR_STATUS) {
    console.log('REQUEST_MENTOR_STATUS reducer');
    return Object.assign({}, state, {
      currentUser: action.payload
    });
  }
  if (action.type === POST_LIKED) {
    console.log('POST_LIKED reducer');
    return Object.assign({}, state, {
      posts: state.posts
    });
  }
  return state;
}

export default rootReducer;
