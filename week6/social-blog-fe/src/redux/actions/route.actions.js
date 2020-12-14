import * as types from "../constants/route.constants";

const redirect = (link) => ({ type: types.SET_REDIRECT_TO, payload: link });

const removeRedirectTo = () => ({
  type: types.REMOVE_REDIRECT_TO,
  payload: null,
});

const routeActions = {
  redirect,
  removeRedirectTo,
};
export default routeActions;
