import { getCategories } from "../../utils/api";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export function receiveCaterories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
}

export function handdleReceiveCategories() {
  return dispatch => {
    getCategories().then(categories => {
      dispatch(receiveCaterories(categories));
    });
  };
}
