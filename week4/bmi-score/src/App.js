import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Age from "./components/Age";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

function App() {
  return (
    <Container>
      <Counter />
    </Container>
  );
}

export default App;
