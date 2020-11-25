import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AssignmentOne from "./components/AssignmentOne";
import AssignmentTwo from "./components/AssignmentTwo";

function App() {
  return (
    <Container>
      {/* <AssignmentOne /> */}
      <AssignmentTwo />
    </Container>
  );
}

export default App;
