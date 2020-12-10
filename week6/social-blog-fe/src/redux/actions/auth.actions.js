import * as types from "../constants/auth.constants";
import api from "../../apiService";
import { toast } from "react-toastify";
import routeActions from "../actions/route.actions";

const loginRequest = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post(`/api/auth/login`, { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    toast.success(`Welcome ${res.data.data.user.name}`);
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: null });
  }
};

const registerAccount = ({ avatarUrl, name, email, password }) => async (
  dispatch
) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post(`/api/users`, {
      avatarUrl,
      name,
      email,
      password,
    });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    dispatch(routeActions.redirect("/login"));
    toast.success(`Welcome ${res.data.data.user.name}`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: null });
  }
};

const authActions = {
  loginRequest,
  registerAccount,
};
export default authActions;
