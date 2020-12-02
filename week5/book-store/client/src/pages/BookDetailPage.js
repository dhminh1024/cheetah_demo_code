import React, { useState, useEffect } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;

const BookDetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [addingBook, setAddingBook] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  console.log(params.id);

  const addToReadingList = (book) => {
    setAddingBook(true);
  };

  useEffect(() => {
    const postData = async () => {
      if (!addingBook) return;
      setLoading(true);
      try {
        let url = `${BACKEND_API}/favorites`;
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(book),
        });
        if (res.ok) {
          setErrorMessage("");
        } else {
          const error = await res.text();
          setErrorMessage(error.split("/n")[0]);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoading(false);
    };
    postData();
  }, [addingBook, book]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `${BACKEND_API}/books/${params.id}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setBook(data);
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
  }, [params]);
  return (
    <Container>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Row className="border border-info mt-5">
        <Col md={3}>
          {book && (
            <img
              className="w-100"
              src={`${BACKEND_API}/${book.imageLink}`}
              alt=""
            />
          )}
        </Col>
        <Col md={9}>
          <h2>{book?.title}</h2>
          <div>
            <strong>Author:</strong> {book?.author}
          </div>
          <div>
            <strong>Year:</strong> {book?.year}
          </div>
          <div>
            <strong>Country:</strong> {book?.country}
          </div>
          <div>
            <strong>Pages:</strong> {book?.pages}
          </div>
          <div>
            <strong>Language:</strong> {book?.language}
          </div>
          <Button onClick={() => addToReadingList(book)}>
            Add to Reading List
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetailPage;
