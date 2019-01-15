import { RECEIVE_POSTS, ADD_POST, REMOVE_POST } from "../actions/posts";

const addPost = (state, action) => ({
  ...state,
  posts: {
    ...state.posts,
    [action.post.id]: {
      ...action.post
    }
  }
});

const removePost = (state, action) => ({
  ...state,
  posts: {
    ...state.posts.filter(post => post.id !== action.postId)
  }
});

export default function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      };
    case ADD_POST:
      return addPost(state, action);
    case REMOVE_POST:
      return removePost(state, action);
    default:
      return state;
  }
}
