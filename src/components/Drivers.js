import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Driver from "./Driver";

export default function Drivers() {
  const [drivers, setDrivers] = useState([]);
  const [season, setSeason] = useState("2022");
  const baseURL = `http://ergast.com/api/f1/${season}/drivers.json`;

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
        setDrivers(result.MRData.DriverTable.Drivers);
        setSeason(result.MRData.DriverTable.season);
      });
  }, [season]);

  return (
    <>
      <Container className="mt-3 mb-3">
        <Row>
          <h2>Drivers</h2>
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
          {drivers.map((driver) => (
            <Driver key={driver.driverId} data={driver} />
          ))}
        </Row>
      </Container>
    </>
  );
}
