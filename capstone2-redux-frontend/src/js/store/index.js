import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { findCurrentUser } from '../middleware/index';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(findCurrentUser, thunk))
);

export default store;
