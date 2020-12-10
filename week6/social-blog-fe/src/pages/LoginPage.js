import React from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import authActions from "../redux/actions/auth.actions";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.loginRequest(formData));
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                placeholder="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
