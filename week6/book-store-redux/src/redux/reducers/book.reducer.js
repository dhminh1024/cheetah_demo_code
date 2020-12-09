import * as types from "../constants/book.constants";
const initialState = {
  books: [],
  loading: false,
  readingList: [],
  selectedBook: null,
};

const bookReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_BOOKS_REQUEST:
      return { ...state, loading: true };
    case types.GET_BOOKS_SUCCESS:
      return { ...state, books: payload, loading: false };
    case types.GET_BOOKS_FAILURE:
      return { ...state, loading: false };

    case types.GET_READING_LIST_REQUEST:
      return { ...state, loading: true };
    case types.GET_READING_LIST_SUCCESS:
      return { ...state, readingList: payload, loading: false };
    case types.GET_READING_LIST_FAILURE:
      return { ...state, loading: false };

    case types.DELETE_READING_BOOK_REQUEST:
      return { ...state, loading: true };
    case types.DELETE_READING_BOOK_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_READING_BOOK_FAILURE:
      return { ...state, loading: false };

    case types.GET_SELECTED_BOOK_REQUEST:
      return { ...state, loading: true };
    case types.GET_SELECTED_BOOK_SUCCESS:
      return { ...state, selectedBook: payload, loading: false };
    case types.GET_SELECTED_BOOK_FAILURE:
      return { ...state, loading: false };

    case types.ADD_BOOK_TO_READING_REQUEST:
      return { ...state, loading: true };
    case types.ADD_BOOK_TO_READING_SUCCESS:
      return { ...state, loading: false };
    case types.ADD_BOOK_TO_READING_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default bookReducer;
