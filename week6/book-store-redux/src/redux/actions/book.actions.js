import * as types from "../constants/book.constants";
import api from "../../apiService";
import { toast } from "react-toastify";

const getBooks = (pageNum, limit, query) => async (dispatch) => {
  dispatch({ type: types.GET_BOOKS_REQUEST, payload: null });
  try {
    let url = `/books?_page=${pageNum}&_limit=${limit}`;
    if (query) url += `&q=${query}`;
    const res = await api.get(url);
    dispatch({ type: types.GET_BOOKS_SUCCESS, payload: res.data });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_BOOKS_FAILURE, payload: error });
  }
};

const getSelectedBook = (bookId) => async (dispatch) => {
  dispatch({ type: types.GET_SELECTED_BOOK_REQUEST, payload: null });
  try {
    const res = await api.get(`/books/${bookId}`);
    dispatch({ type: types.GET_SELECTED_BOOK_SUCCESS, payload: res.data });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_SELECTED_BOOK_FAILURE, payload: error });
  }
};

const getReadingList = () => async (dispatch) => {
  dispatch({ type: types.GET_READING_LIST_REQUEST, payload: null });
  try {
    let url = `/favorites`;
    const res = await api.get(url);
    dispatch({ type: types.GET_READING_LIST_SUCCESS, payload: res.data });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_READING_LIST_FAILURE, payload: error });
  }
};

const removeBook = (removedBookId) => async (dispatch) => {
  dispatch({ type: types.DELETE_READING_BOOK_REQUEST, payload: null });
  try {
    await api.delete(`/favorites/${removedBookId}`);
    toast.success("The book has been removed");
    dispatch({ type: types.DELETE_READING_BOOK_SUCCESS, payload: null });
    dispatch(getReadingList());
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.DELETE_READING_BOOK_FAILURE, payload: error });
  }
};

const addBookToReading = (book) => async (dispatch) => {
  dispatch({ type: types.ADD_BOOK_TO_READING_REQUEST, payload: null });
  try {
    await api.post(`/favorites`, book);
    toast.success("The book has been added to the reading list");
    dispatch({ type: types.ADD_BOOK_TO_READING_SUCCESS, payload: null });
    dispatch(getReadingList());
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.ADD_BOOK_TO_READING_FAILURE, payload: error });
  }
};

const bookActions = {
  getBooks,
  getReadingList,
  removeBook,
  getSelectedBook,
  addBookToReading,
};
export default bookActions;
