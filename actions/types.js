//These are action types that can be broadcasted out and listened to.
//Currently, ADDING_POST isn't being used by an actions or listened to.
//ADD_POST_FAILURE is dispatched in the actions if adding a post fails but is not
//being listened to in the reducer.
export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const ADDING_POST = 'ADDING_POST';
export const UPDATE_USER_POST = 'UPDATE_USER_POST';