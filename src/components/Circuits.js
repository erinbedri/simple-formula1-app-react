import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Circuit from "./Circuit";

export default function Circuits() {
  const baseURL = "http://ergast.com/api/f1/2022/circuits.json";

  const [circuits, setCircuits] = useState([]);
  const [season, setSeason] = useState("2022");

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((result) => {
        setCircuits(result.MRData.CircuitTable.Circuits);
        setSeason(result.MRData.CircuitTable.season);
      });
  }, []);

  return (
    <>
      <Container className="mt-3 mb-3">
        <h2>Circuits</h2>
        <h5>Season {season}</h5>
        <Row>
          {circuits.map((circuit) => (
            <Circuit key={circuit.circuitId} data={circuit} />
          ))}
        </Row>
      </Container>
    </>
  );
}
