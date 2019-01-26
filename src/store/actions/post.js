import {
  getPost,
  savePost,
  updatePost,
  deletePost,
  increasePostVotes,
  decreasePostVotes
} from "../../utils/api";

export const LIST_POSTS = "LIST_POSTS";
export const GET_POST = "GET_POST";
export const EDIT_POST = "EDIT_POST";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const INCREASE_VOTE_POST = "INCREASE_VOTE_POST";
export const DECREASE_VOTE_POST = "DECREASE_VOTE_POST";

// Action get post
function getPostAction(post) {
  return {
    type: GET_POST,
    post
  };
}

//Middleware get post
export function handleGetPost(postId) {
  return dispatch => {
    return getPost(postId).then(post => {
      dispatch(getPostAction(post));
    });
  };
}

// Action add post
function addPostAction(post) {
  return {
    type: ADD_POST,
    post
  };
}

//Middleware add post
export function handleAddPost(post) {
  return dispatch => {
    return savePost(post).then(post => {
      dispatch(addPostAction(post));
    });
  };
}

// Action edit post
function editPostAction(post) {
  return {
    type: EDIT_POST,
    post
  };
}

//Middleware edit post
export function handleEditPost(post) {
  return dispatch => {
    return updatePost(post).then(post => {
      dispatch(editPostAction(post));
    });
  };
}

// Action increase voto post
function increaseVoteAction(post) {
  return {
    type: INCREASE_VOTE_POST,
    post
  };
}

//Middleware increase voto post
export function handleIncreaseVote(post) {
  return dispatch => {
    return increasePostVotes(post.id).then(post => {
      dispatch(increaseVoteAction(post));
    });
  };
}

// Action decrease voto post
function decreaseVoteAction(post) {
  return {
    type: DECREASE_VOTE_POST,
    post
  };
}

//Middleware decrease voto post
export function handleDecreaseVote(post) {
  return dispatch => {
    return decreasePostVotes(post.id).then(post => {
      dispatch(decreaseVoteAction(post));
    });
  };
}

// Action delete post
function deletePostAction(post) {
  return {
    type: DELETE_POST,
    post
  };
}

//Middleware delete post
export function handleDeletePost(postId) {
  return dispatch => {
    return deletePost(postId).then(post => {
      dispatch(deletePostAction(post));
    });
  };
}
