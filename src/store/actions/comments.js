import {
  getComments,
  saveComment,
  deleteComment,
  increaseCommentVotes,
  decreaseCommentVotes
} from "../../utils/api";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const INCREASE_COMMENT_VOTES = "INCREASE_COMMENT_VOTES";
export const DECREASE_COMMENT_VOTES = "DECREASE_COMMENT_VOTES";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function increaseCommentVotes(comment) {
  return {
    type: INCREASE_COMMENT_VOTES,
    comment
  };
}

export function decreaseCommentVotes(comment) {
  return {
    type: DECREASE_COMMENT_VOTES,
    comment
  };
}

export function removeComment(commentId) {
  return {
    type: ADD_COMMENT,
    commentId
  };
}

export function handdleReceiveComments(postId) {
  return dispatch => {
    getComments(postId).then(comments => {
      dispatch(receiveComments(comments));
    });
  };
}

export function handdleAddComment(comment) {
  return dispatch => {
    saveComment(comment).then(comment => {
      dispatch(addComment(comment));
    });
  };
}

export function handdleRemoveComment(commentId) {
  return dispatch => {
    deleteComment(commentId).then(comment => {
      dispatch(removeComment(comment));
    });
  };
}

export function handdleIncreaseCommentVotes(commentId) {
  return dispatch => {
    increaseCommentVotes(commentId).then(comment => {
      dispatch(increaseCommentVotes(comment));
    });
  };
}

export function handdleDecreaseCommentVotes(commentId) {
  return dispatch => {
    decreaseCommentVotes(commentId).then(comment => {
      dispatch(decreaseCommentVotes(comment));
    });
  };
}
