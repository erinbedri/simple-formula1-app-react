import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const changeHandler = (e) => {
    setFormData((oldData) => ({
      ...oldData,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container className="mt-3 mb-3">
      <Row className="justify-content-md-center">
        <Col xs lg="4">
          <h2 className="mb-4">Login</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                id="fieldsetCheck"
                label="Remember me"
                name="rememberMe"
                value={formData.rememberMe}
                onChange={changeHandler}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Login
            </Button>
          </Form>

          <Nav.Link as={NavLink} to="/register" className="mt-3">
            If you do not have an account, register instead.
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
}
