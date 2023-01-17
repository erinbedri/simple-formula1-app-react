import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Driver from "./Driver";

export default function Drivers() {
  const baseURL = "http://ergast.com/api/f1/2022/drivers.json";

  const [drivers, setDrivers] = useState([]);
  const [season, setSeason] = useState("2022");

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((result) => {
        setDrivers(result.MRData.DriverTable.Drivers);
        setSeason(result.MRData.DriverTable.season);
      });
  }, []);

  return (
    <>
      <Container className="mt-3 mb-3">
        <h2>Drivers</h2>
        <h5>Season {season}</h5>
        <Row>
          {drivers.map((driver) => (
            <Driver key={driver.driverId} data={driver} />
          ))}
        </Row>
      </Container>
    </>
  );
}
