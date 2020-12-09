import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../apiService";
import { useDispatch, useSelector } from "react-redux";
import bookActions from "../redux/actions/book.actions";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const ReadingPage = () => {
  const books = useSelector((state) => state.book.readingList);
  const loading = useSelector((state) => state.book.loading);
  const [removedBookId, setRemovedBookId] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickBook = (bookId) => {
    history.push(`/books/${bookId}`);
  };

  const removeBook = (bookId) => {
    setRemovedBookId(bookId);
  };

  useEffect(() => {
    dispatch(bookActions.getReadingList());
  }, [dispatch]);

  useEffect(() => {
    if (!removedBookId) return;
    dispatch(bookActions.removeBook(removedBookId));
  }, [dispatch, removedBookId]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center">Reading List</h1>
          <hr />
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
                <li key={book.id}>
                  <Card
                    style={{
                      width: "12rem",
                      height: "27rem",
                      marginBottom: "2rem",
                      position: "relative",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`${BACKEND_API}/${book.imageLink}`}
                      onClick={() => handleClickBook(book.id)}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>@{book.author}</Card.Text>
                      <Button
                        className="position-absolute btn-danger"
                        style={{ top: "5px", right: "5px" }}
                        size="sm"
                        onClick={() => removeBook(book.id)}
                      >
                        &times;
                      </Button>
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

export default ReadingPage;
