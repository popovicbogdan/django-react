import { combineReducers } from "redux";
import posts from "./posts";
import comments from "./posts";

export default combineReducers({
  posts,
  comments
});
