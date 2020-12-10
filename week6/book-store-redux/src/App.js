import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicNavbar from "./components/PublicNavbar";
import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookDetailPage from "./pages/BookDetailPage";
import AlertMsg from "./components/AlertMsg";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <Router>
      <PublicNavbar />
      <AlertMsg />
      <Row>
        <Col>SideMenu</Col>
        <Col>
          <Switch>
            <Route exact path="/books/:id" component={BookDetailPage} />
            <Route exact path="/reading" component={ReadingPage} />
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
