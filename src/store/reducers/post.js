import {
  GET_POST,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  INCREASE_VOTE_POST,
  DECREASE_VOTE_POST
} from "../actions/post";

import { ADD_COMMENT, REMOVE_COMMENT } from "../actions/comments";

const initialState = {
  loading: true,
  post: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return {
        loading: false,
        post: action.post
      };
    case ADD_POST:
      return {
        loading: false,
        post: action.post
      };
    case EDIT_POST:
      return {
        loading: false,
        post: action.post
      };
    case INCREASE_VOTE_POST:
    case DECREASE_VOTE_POST:
      return {
        loading: false,
        post: action.post
      };
    case DELETE_POST:
      return {
        loading: false,
        post: action.post
      };
    case ADD_COMMENT:
      return {
        loading: false,
        post: {
          ...state.post,
          commentCount: state.post.commentCount + 1
        }
      };
    case REMOVE_COMMENT:
      return {
        loading: false,
        post: {
          ...state.post,
          commentCount: state.post.commentCount - 1
        }
      };
    default:
      return state;
  }
}
