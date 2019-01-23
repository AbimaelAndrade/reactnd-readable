import { getPosts } from "../../utils/api";
import { LIST_POSTS } from "./post";

export function listPosts(posts, sortType) {
  return {
    type: LIST_POSTS,
    posts,
    sortType
  };
}

export function handleGetPosts(sortType = "DATE", category = undefined) {
  return dispatch => {
    return getPosts(category).then(posts => {
      dispatch(listPosts(posts, sortType));
    });
  };
}
