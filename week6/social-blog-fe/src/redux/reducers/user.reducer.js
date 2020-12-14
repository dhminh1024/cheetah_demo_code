import * as types from "../constants/user.constants";
import { conversationTypes } from "../../config/constants";

const globalConversation = {
  _id: conversationTypes.GLOBAL,
  type: conversationTypes.GLOBAL,
};

const initialState = {
  users: [],
  conversations: [globalConversation],
  totalPageNum: 1,
  selectedUser: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USERS_REQUEST:
    case types.GET_FRIENDS_REQUEST:
    case types.GET_SENT_REQUEST:
    case types.GET_RECEIVED_REQUEST:
    case types.GET_CONVERSATIONS_REQUEST:
      return { ...state, loading: true };

    case types.GET_USERS_SUCCESS:
    case types.GET_FRIENDS_SUCCESS:
    case types.GET_SENT_SUCCESS:
    case types.GET_RECEIVED_SUCCESS:
      return {
        ...state,
        users: payload.users,
        totalPageNum: payload.totalPages,
        loading: false,
      };

    case types.GET_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        conversations: [globalConversation, ...payload.conversations],
        totalPageNum: payload.totalPages,
        loading: false,
      };

    case types.GET_USERS_FAILURE:
    case types.GET_FRIENDS_FAILURE:
    case types.GET_SENT_FAILURE:
    case types.GET_RECEIVED_FAILURE:
    case types.GET_CONVERSATIONS_FAILURE:
      return { ...state, loading: false };

    case types.ADD_FRIEND_REQUEST:
    case types.REMOVE_FRIEND_REQUEST:
    case types.DECLINE_REQUEST_REQUEST:
    case types.ACCEPT_REQUEST_REQUEST:
    case types.CANCEL_REQUEST_REQUEST:
      return { ...state, loading: true };

    case types.ADD_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [
          ...state.users.map((user) => {
            if (user._id !== payload.targetId) return user;
            return {
              ...user,
              friendship: { ...user.friendship, status: "requesting" },
            };
          }),
        ],
      };
    case types.REMOVE_FRIEND_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users.filter((user) => user._id !== payload.targetId)],
      };
    case types.DECLINE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users.filter((user) => user._id !== payload.targetId)],
      };
    case types.ACCEPT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users.filter((user) => user._id !== payload.targetId)],
      };
    case types.CANCEL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users.filter((user) => user._id !== payload.targetId)],
      };
    case types.ADD_FRIEND_FAILURE:
    case types.REMOVE_FRIEND_FAILURE:
    case types.DECLINE_REQUEST_FAILURE:
    case types.ACCEPT_REQUEST_FAILURE:
    case types.CANCEL_REQUEST_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default userReducer;
