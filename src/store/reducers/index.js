import { combineReducers } from "redux";
import posts from "./posts";
import categories from "./categories";
import favorities from "./favorities";

export default combineReducers({
  posts,
  categories,
  favorities
});
