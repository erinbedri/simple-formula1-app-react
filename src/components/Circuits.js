import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Circuit from "./Circuit";

export default function Circuits() {
  const [circuits, setCircuits] = useState([]);
  const [season, setSeason] = useState("2022");
  const baseURL = `http://ergast.com/api/f1/${season}/circuits.json`;

  const seasons = [];

  for (var i = 2022; i >= 1950; i--) {
    seasons.push(i);
  }

  const changeHandler = (e) => {
    setSeason((oldState) => e.target.value);
  };

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((result) => {
        setCircuits(result.MRData.CircuitTable.Circuits);
        setSeason(result.MRData.CircuitTable.season);
      });
  }, [season]);

  return (
    <>
      <Container className="mt-3 mb-3">
        <Row>
          <h2>Circuits</h2>
          <Form.Label>
            <h5>Season {season}</h5>
          </Form.Label>
          <Col sm="3">
            <Form.Select name="year" value={season} onChange={changeHandler}>
              {seasons.map((year) => (
                <option>{year}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>
        <Row>
          {circuits.map((circuit) => (
            <Circuit key={circuit.circuitId} data={circuit} />
          ))}
        </Row>
      </Container>
    </>
  );
}
