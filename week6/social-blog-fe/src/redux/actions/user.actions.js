import * as types from "../constants/user.constants";
import api from "../../apiService";

const usersRequest = (
  pageNum = 1,
  limit = 10,
  query = null,
  sortBy = null
) => async (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST, payload: null });
  try {
    let queryString = "";
    if (query) {
      queryString = `&name[$regex]=${query}&name[$options]=i`;
    }
    let sortByString = "";
    if (sortBy?.key) {
      sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
    }
    const res = await api.get(
      `/users?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
    );
    dispatch({
      type: types.GET_USERS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_USERS_FAILURE, payload: error });
  }
};

const friendsRequest = (
  pageNum = 1,
  limit = 10,
  query = null,
  sortBy = null
) => async (dispatch) => {
  dispatch({ type: types.GET_FRIENDS_REQUEST, payload: null });
  try {
    let queryString = "";
    if (query) {
      queryString = `&name[$regex]=${query}&name[$options]=i`;
    }
    let sortByString = "";
    if (sortBy?.key) {
      sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
    }
    const res = await api.get(
      `/friends?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
    );
    dispatch({
      type: types.GET_FRIENDS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_FRIENDS_FAILURE, payload: error });
  }
};

const conversationsRequest = (pageNum = 1, limit = 10, query = null) => async (
  dispatch
) => {
  dispatch({ type: types.GET_CONVERSATIONS_REQUEST, payload: null });
  try {
    let queryString = "";
    if (query) {
      queryString = `&name=${query}`;
    }
    const res = await api.get(
      `/conversations?page=${pageNum}&limit=${limit}${queryString}`
    );
    dispatch({
      type: types.GET_CONVERSATIONS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_CONVERSATIONS_FAILURE, payload: error });
  }
};

const getSentRequests = (
  pageNum = 1,
  limit = 10,
  query = null,
  sortBy = null
) => async (dispatch) => {
  dispatch({ type: types.GET_SENT_REQUEST, payload: null });
  try {
    let queryString = "";
    if (query) {
      queryString = `&name[$regex]=${query}&name[$options]=i`;
    }
    let sortByString = "";
    if (sortBy?.key) {
      sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
    }
    const res = await api.get(
      `/friends/add?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
    );
    dispatch({
      type: types.GET_SENT_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_SENT_FAILURE, payload: error });
  }
};

const getReceivedRequests = (
  pageNum = 1,
  limit = 10,
  query = null,
  sortBy = null
) => async (dispatch) => {
  dispatch({ type: types.GET_RECEIVED_REQUEST, payload: null });
  try {
    let queryString = "";
    if (query) {
      queryString = `&name[$regex]=${query}&name[$options]=i`;
    }
    let sortByString = "";
    if (sortBy?.key) {
      sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
    }
    const res = await api.get(
      `/friends/manage?page=${pageNum}&limit=${limit}${queryString}${sortByString}`
    );
    dispatch({
      type: types.GET_RECEIVED_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_RECEIVED_FAILURE, payload: error });
  }
};

const addFriend = (userId) => async (dispatch) => {
  dispatch({ type: types.ADD_FRIEND_REQUEST, payload: null });
  try {
    const res = await api.post(`/friends/add/${userId}`);
    dispatch({
      type: types.ADD_FRIEND_SUCCESS,
      payload: { ...res.data.data, targetId: userId },
    });
  } catch (error) {
    dispatch({ type: types.ADD_FRIEND_FAILURE, payload: error });
  }
};

const removeFriend = (userId) => async (dispatch) => {
  dispatch({ type: types.REMOVE_FRIEND_REQUEST, payload: null });
  try {
    const res = await api.delete(`/friends/${userId}`);
    dispatch({
      type: types.REMOVE_FRIEND_SUCCESS,
      payload: { ...res.data.data, targetId: userId },
    });
  } catch (error) {
    dispatch({ type: types.REMOVE_FRIEND_FAILURE, payload: error });
  }
};

const declineRequest = (userId) => async (dispatch) => {
  dispatch({ type: types.DECLINE_REQUEST_REQUEST, payload: null });
  try {
    const res = await api.delete(`/friends/manage/${userId}`);
    dispatch({
      type: types.DECLINE_REQUEST_SUCCESS,
      payload: { ...res.data.data, targetId: userId },
    });
  } catch (error) {
    dispatch({ type: types.DECLINE_REQUEST_FAILURE, payload: error });
  }
};

const acceptRequest = (userId) => async (dispatch) => {
  dispatch({ type: types.ACCEPT_REQUEST_REQUEST, payload: null });
  try {
    const res = await api.post(`/friends/manage/${userId}`);
    dispatch({
      type: types.ACCEPT_REQUEST_SUCCESS,
      payload: { ...res.data.data, targetId: userId },
    });
  } catch (error) {
    dispatch({ type: types.ACCEPT_REQUEST_FAILURE, payload: error });
  }
};

const cancelRequest = (userId) => async (dispatch) => {
  dispatch({ type: types.CANCEL_REQUEST_REQUEST, payload: null });
  try {
    const res = await api.delete(`/friends/add/${userId}`);
    dispatch({
      type: types.CANCEL_REQUEST_SUCCESS,
      payload: { ...res.data.data, targetId: userId },
    });
  } catch (error) {
    dispatch({ type: types.CANCEL_REQUEST_FAILURE, payload: error });
  }
};

const userActions = {
  usersRequest,
  friendsRequest,
  getSentRequests,
  getReceivedRequests,
  addFriend,
  removeFriend,
  declineRequest,
  acceptRequest,
  cancelRequest,
  conversationsRequest,
};
export default userActions;
