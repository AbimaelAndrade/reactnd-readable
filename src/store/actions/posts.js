import { savePost, deletePost } from "../../utils/api";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  };
}

export function addPost(post) {
  return {
    type: ADD_POST,
    post
  };
}

export function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId
  };
}

export function handdleAddPost(post) {
  return dispatch => {
    savePost(post).then(post => {
      dispatch(addPost(post));
    });
  };
}

export function handdleRemovePost(postId) {
  return dispatch => {
    deletePost(postId).then(post => {
      dispatch(removePost(postId));
    });
  };
}
