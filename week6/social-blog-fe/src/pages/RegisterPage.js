import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import authActions from "../redux/actions/auth.actions";
import routeActions from "../redux/actions/route.actions";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    avartarURL: "",
  });
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, password2 } = formData;
    if (password !== password2) {
      toast.error("Passwords do not match");
    }
    dispatch(authActions.registerAccount(formData));
  };

  useEffect(() => {
    if (redirectTo) {
      history.push(redirectTo);
      dispatch(routeActions.removeRedirectTo());
    }
  }, [dispatch, history, redirectTo]);

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                placeholder="Your Avatar"
                value={formData.avartarURL}
                name="avartarURL"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Your Name"
                value={formData.name}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Confirm your password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Register</Button>
          </Form>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
