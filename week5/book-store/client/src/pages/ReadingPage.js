import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const ReadingPage = () => {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleClickBook = (bookId) => {
    history.push(`/books/${bookId}`);
    // history.push(`/reading`);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `${BACKEND_API}/favorites`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setBooks(data);
          setErrorMessage("");
        } else {
          setErrorMessage("Something doesn't work on the server side");
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

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
