import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import blogReducer from "./blog.reducer";
import userReducer from "./user.reducer";
import routeReducer from "./route.reducer";

export default combineReducers({
  auth: authReducer,
  blog: blogReducer,
  user: userReducer,
  route: routeReducer,
});
