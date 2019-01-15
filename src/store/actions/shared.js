import { getInitialData } from "../../utils/api";
import { receivePosts } from "../actions/posts";
import { receiveCaterories } from "../actions/categories";
import { receiveFavorites } from "../actions/favorites";

export function handleIncialData() {
  return dispatch => {
    return getInitialData()
      .then(({ posts, categories, favorites }) => {
        dispatch(receivePosts(posts));
        dispatch(receiveCaterories(categories));
        dispatch(receiveFavorites(favorites));
      })
      .catch(error => console.log("ERROR:", error));
  };
}
