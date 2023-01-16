import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Formula 1
        </Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/drivers">
            Drivers
          </Nav.Link>

          <Nav.Link as={Link} to="/circuits">
            Circuits
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
