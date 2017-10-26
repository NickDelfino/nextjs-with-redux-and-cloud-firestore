import {
  UPDATE_USER_POST,
  FETCH_POSTS,
  ADD_POST_SUCCESS
}
from '../actions/types';
import { initialState } from '../store';
import { MAX_LENGTH } from "../lib/const";

// REDUCERS
export const PostReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER_POST:
      return Object.assign({}, state, action.payload);
    case FETCH_POSTS:
      return Object.assign({}, state, action.payload);
    case ADD_POST_SUCCESS:
      return Object.assign({}, state, { userPost: '', lengthLeft: MAX_LENGTH });
    default:
      return initialState
  }
};