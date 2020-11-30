import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AssignmentOne from "./components/AssignmentOne";
import AssignmentTwo from "./components/AssignmentTwo";
import HookFlow from "./components/HookFlow";

function App() {
  return (
    <Container>
      {/* <AssignmentOne /> */}
      {/* <AssignmentTwo /> */}
      <HookFlow />
    </Container>
  );
}

export default App;
