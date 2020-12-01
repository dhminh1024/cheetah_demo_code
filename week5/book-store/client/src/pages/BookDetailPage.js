import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = `http://localhost:5000/books/${params.id}`;
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
    <div>
      <h1>{book?.title}</h1>
    </div>
  );
};

export default BookDetailPage;
