import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Age from "./components/Age";
import Greeting from "./components/Greeting";

function App() {
  return (
    <Container>
      <Greeting name="Minh" />
      <Greeting name="Dong" />
      <Greeting name="Trieu" />
      <Age yearOfBirth={1985} />
    </Container>
  );
}

export default App;
