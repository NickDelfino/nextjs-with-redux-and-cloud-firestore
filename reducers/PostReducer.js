import {
  UPDATE_USER_POST,
  FETCH_POSTS,
  ADD_POST_SUCCESS
}
from '../actions/types';
import { initialState } from '../store';

// REDUCERS
export const PostReducer = (state, action) => {
  switch (action.type) {
    //On update user post just pass along the updated data. In this case, user inputted data is updated.
    case UPDATE_USER_POST:
      return Object.assign({}, state, action.payload);
    //On fetch posts just pass along the updated data. In this case, new posts.
    case FETCH_POSTS:
      return Object.assign({}, state, action.payload);
    //On add post success clear out the userpost.
    case ADD_POST_SUCCESS:
      return Object.assign({}, state, { userPost: ''});
    default:
      return initialState
  }
};