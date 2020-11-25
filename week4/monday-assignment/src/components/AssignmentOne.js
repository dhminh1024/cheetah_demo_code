import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Message from "./Message";
import UserForm from "./UserForm";

const AssignmentOne = () => {
  const [name, setName] = useState("");
  const [yoB, setYoB] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (yoB >= 2020) {
      // show an error message
      const msg = "YoB need to be smaller than 2020";
      setErrorMessage(msg);
    } else {
      setErrorMessage("");
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value
      .split(" ")
      .map((word) =>
        word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ""
      )
      .join(" ");

    setName(newName);
  };

  const handleYoBChange = (e) => {
    setYoB(e.target.value);
  };
  return (
    <Container>
      <UserForm
        name={name}
        yoB={yoB}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleYoBChange={handleYoBChange}
      />
      <Message name={name} yearOfBirth={yoB} />
    </Container>
  );
};

export default AssignmentOne;
