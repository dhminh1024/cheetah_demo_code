import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Age from "./components/Age";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import BMICalculator from "./components/BMICalculator";

function App() {
  return (
    <Container>
      <BMICalculator />
      <Greeting name="Minh" />
    </Container>
  );
}

export default App;
