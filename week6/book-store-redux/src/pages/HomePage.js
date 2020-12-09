import React, { useState, useEffect } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

import { useHistory } from "react-router-dom";
import PaginationBar from "../components/PaginationBar";
import SearchForm from "../components/SearchForm";
import api from "../apiService";
import { useDispatch, useSelector } from "react-redux";
import bookActions from "../redux/actions/book.actions";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const HomePage = () => {
  // const [books, setBooks] = useState([]);
  const books = useSelector((state) => state.book.books);
  const loading = useSelector((state) => state.book.loading);
  const [pageNum, setPageNum] = useState(1);
  const totalPage = 10;
  const limit = 10;

  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickBook = (bookId) => {
    history.push(`/books/${bookId}`);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
  };

  useEffect(() => {
    dispatch(bookActions.getReadingList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(bookActions.getBooks(pageNum, limit, query));
  }, [dispatch, pageNum, limit, query]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Book Store</h1>
          <SearchForm
            loading={loading}
            searchInput={searchInput}
            handleSearchChange={handleSearchInputChange}
            handleSubmit={handleSubmit}
          />
          <hr />
          <PaginationBar
            pageNum={pageNum}
            setPageNum={setPageNum}
            totalPageNum={totalPage}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {loading ? (
            <div className="text-center">
              <ClipLoader color="#f86c6b" size={150} loading={true} />
            </div>
          ) : (
            <ul className="list-unstyled d-flex flex-wrap justify-content-between">
              {books.map((book) => (
                <li key={book.id} onClick={() => handleClickBook(book.id)}>
                  <Card
                    style={{
                      width: "12rem",
                      height: "27rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`${BACKEND_API}/${book.imageLink}`}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>@{book.author}</Card.Text>
                    </Card.Body>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
