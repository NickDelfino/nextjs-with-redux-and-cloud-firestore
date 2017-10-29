import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { PostReducer } from './reducers/PostReducer';

export const initialState = {
  posts: [],
  userPost: ''
};

export const initStore = (initialState = initialState) => {
  return createStore(PostReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};