import { RECEIVE_CATEGORIES } from "../actions/categories";

const initialState = {
  loading: true,
  list: []
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        loading: false,
        list: action.categories
      };
    default:
      return state;
  }
}
