import { saveFavorite, deleteFavorite } from "../../utils/api";

export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export function receiveFavorites(favorites) {
  return {
    type: RECEIVE_FAVORITES,
    favorites
  };
}

export function addFavorite(favorite) {
  return {
    type: ADD_FAVORITE,
    favorite
  };
}

export function removeFavorite(favoriteId) {
  return {
    type: REMOVE_FAVORITE,
    favoriteId
  };
}

export function handdleAddFavorite(favorite) {
  return dispatch => {
    saveFavorite(favorite).then(favorite => {
      dispatch(addFavorite(favorite));
    });
  };
}

export function handdleRemoveFavorite(favoriteId) {
  return dispatch => {
    deleteFavorite(favoriteId).then(favorite => {
      dispatch(removeFavorite(favoriteId));
    });
  };
}
