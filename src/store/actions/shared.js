import { getInitialData } from "../../utils/api";
import { receivePosts } from "../actions/posts";
import { receiveCaterories } from "../actions/categories";

export function handleIncialData() {
  return dispatch => {
    return getInitialData()
      .then(({ posts, categories }) => {
        dispatch(receivePosts(posts));
        dispatch(receiveCaterories(categories));
      })
      .catch(error => console.log("ERROR:", error));
  };
}
