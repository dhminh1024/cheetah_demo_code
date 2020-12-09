import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../apiService";
import { useSelector, useDispatch } from "react-redux";
import bookActions from "";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const ReadingPage = () => {
  // const [books, setBooks] = useState([]);
  // const [loading, setLoading] = useState(false);
  const books = useSelector((state) => state.book.readingList);
  const loading = useSelector((state) => state.book.loading);

  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickBook = (bookId) => {
    history.push(`/books/${bookId}`);
    // history.push(`/reading`);
  };

  useEffect(() => {
    dispatch(bookActions.getReadingList());
  }, [dispatch]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Reading List</h1>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <hr />
        </Col>
      </Row>
      <Row>
        {loading ? (
          <div>Loading..</div>
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
      </Row>
    </Container>
  );
};

export default ReadingPage;
