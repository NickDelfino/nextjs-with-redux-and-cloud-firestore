import { loadDB } from '../lib/db';
import {
  UPDATE_USER_POST,
  FETCH_POSTS,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
}
from './types';

//ACTIONS
//This keeps the data in sync as the user types.
//Also determines the length the user has left.
export const updateUserPost = (userPost) => dispatch => {
  let newState = {
    userPost: userPost
  };

  dispatch({
    type: UPDATE_USER_POST,
    payload: newState
  });
};

//This adds the post to firebase cloudstore.
//User typed data is reset upon success.
//The failure action is fired but the reducer does not listen for it.
//This is functionality that should be added in on a featured product.
//For example, notify user the add failed and they should try again.
export const addPost = (post) => async dispatch => {
  const db = await loadDB();

  db.firestore().collection('posts')
      .add({
        post: post,
        timestamp: db.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        dispatch({
          type: ADD_POST_SUCCESS
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        dispatch({
          type: ADD_POST_FAILURE
        });
      });
};

//This sets up the listener to fetch posts.
//This pulls back an initial 50 posts but also sets
//a listener so as new posts fill in their are added to the top.
export const fetchPosts = () => async dispatch => {
  const db = await loadDB();

  db.firestore().collection('posts')
      .orderBy('timestamp', 'desc')
      .limit(50)
      .onSnapshot(snapshot => {

        let newState = {
          posts: []
        };

        snapshot.forEach(function(doc) {
          newState.posts.push({
            id: doc.id,
            post: doc.data().post
          });
        });

        dispatch({
          type: FETCH_POSTS,
          payload: newState
        })
      });
};