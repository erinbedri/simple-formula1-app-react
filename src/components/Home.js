import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Container className="mt-3">
        <h2>Home Page</h2>
        <Row>
          <Col>Home</Col>
        </Row>
      </Container>
    </>
  );
}
