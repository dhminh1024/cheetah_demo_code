import * as types from "../constants/blog.constants";
import api from "../../apiService";
import { toast } from "react-toastify";

const blogsRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_BLOGS_REQUEST, payload: null });
  try {
    // TODO
    const res = await api.get("api/blogs");
    dispatch({ type: types.GET_BLOGS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_BLOGS_FAILURE, payload: null });
  }
};

const blogActions = {
  blogsRequest,
};
export default blogActions;
