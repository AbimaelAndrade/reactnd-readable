import {
  RECEIVE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from "../actions/favorites";

const saveFavorite = (state, action) => {
  return {
    ...state,
    favorites: {
      ...state.favorites,
      [action.favorite.id]: {
        ...action.favorite
      }
    }
  };
};

const removeFavorite = (state, action) => {
  return {
    ...state,
    favorites: {
      ...state.favorites.filter(favorite => action.favoriteId !== favorite.id)
    }
  };
};

export default function favorites(state = {}, action) {
  switch (action.type) {
    case RECEIVE_FAVORITES:
      return {
        ...state,
        ...action.favorites
      };
    case ADD_FAVORITE:
      return saveFavorite(state, action);
    case REMOVE_FAVORITE:
      return removeFavorite(state, action);
    default:
      return state;
  }
}
