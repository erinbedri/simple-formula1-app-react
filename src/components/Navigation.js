import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Formula 1
        </Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav.Link
            as={NavLink}
            to="/"
            style={({ isActive }) => ({
              active: isActive ? true : false,
            })}
          >
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/drivers">
            Drivers
          </Nav.Link>

          <Nav.Link as={NavLink} to="/circuits">
            Circuits
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
