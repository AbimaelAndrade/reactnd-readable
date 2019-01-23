import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  INCREASE_COMMENT_VOTES,
  DECREASE_COMMENT_VOTES
} from "../actions/comments";

const initialState = {
  loading: true,
  comments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        loading: false,
        comments: action.comments.map(comment => {
          return {
            ...comment
          };
        })
      };

    case INCREASE_COMMENT_VOTES:
    case DECREASE_COMMENT_VOTES:
      return {
        loading: false,
        comments: state.comments
          .map(comment => {
            return comment.id === action.comment.id ? action.comment : comment;
          })
          .map(comment => {
            return {
              ...comment
            };
          })
      };

    case ADD_COMMENT:
      return {
        loading: false,
        comments: [
          ...state.comments,
          {
            ...action.comment
          }
        ]
      };

    case REMOVE_COMMENT:
      return {
        loading: false,
        comments: state.comments.filter(comment => {
          return comment.id !== action.comment.id;
        })
      };

    default:
      return state;
  }
}
