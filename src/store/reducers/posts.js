import {
  LIST_POSTS,
  INCREASE_VOTE_POST,
  DECREASE_VOTE_POST
} from "../actions/post";

const initialState = {
  loading: true,
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIST_POSTS:
      switch (action.sortType) {
        case "DATE":
          return {
            loading: false,
            sortType: "DATE",
            list: action.posts.sort(
              (p1, p2) =>
                action.sortOrder === "ASC"
                  ? p1.timestamp - p2.timestamp
                  : p2.timestamp - p1.timestamp
            )
          };
        case "VOTES":
          return {
            loading: false,
            sortType: "VOTES",
            list: action.posts.sort(
              (p1, p2) =>
                action.sortOrder === "ASC"
                  ? p1.voteScore - p2.voteScore
                  : p2.voteScore - p1.voteScore
            )
          };
        default:
          return action.posts;
      }

    case INCREASE_VOTE_POST:
    case DECREASE_VOTE_POST:
      return {
        loading: false,
        list: state.list.map(post => {
          return post.id === action.post.id ? action.post : post;
        })
      };
    default:
      return state;
  }
}
