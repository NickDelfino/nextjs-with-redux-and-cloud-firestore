import { loadDB } from '../lib/db';
import {
  UPDATE_USER_POST,
  FETCH_POSTS,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE
}
from './types';
import { MAX_LENGTH } from "../lib/const";

//ACTIONS
export const updateUserPost = (userPost) => dispatch => {
  let newState = {
    userPost: userPost,
    lengthLeft: MAX_LENGTH - userPost.length
  };

  dispatch({
    type: UPDATE_USER_POST,
    payload: newState
  });
};

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