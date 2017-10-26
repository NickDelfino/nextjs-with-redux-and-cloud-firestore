import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { PostReducer } from './reducers/PostReducer';
import { MAX_LENGTH } from "./lib/const";

export const initialState = {
  posts: [],
  userPost: '',
  lengthLeft: MAX_LENGTH
};

export const initStore = (initialState = initialState) => {
  return createStore(PostReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};