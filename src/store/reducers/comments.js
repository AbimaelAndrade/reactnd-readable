import {
  RECEIVE_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
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
        comments: state.comments.map(comment => {
          return comment.id === action.comment.id ? action.comment : comment;
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

    case EDIT_COMMENT:
      return {
        loading: false,
        comments: state.comments.map(comment => {
          if (comment.id === action.comment.id) {
            return Object.assign({}, comment, action.comment);
          }
          return comment;
        })
      };

    case REMOVE_COMMENT:
      return {
        loading: false,
        comments: state.comments.filter(
          comment => comment.id !== action.comment.id
        )
      };

    default:
      return state;
  }
}
