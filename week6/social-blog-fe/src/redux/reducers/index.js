import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import blogReducer from "./blog.reducer";
import userReducer from "./user.reducer";

export default combineReducers({
  auth: authReducer,
  blog: blogReducer,
  user: userReducer,
});
