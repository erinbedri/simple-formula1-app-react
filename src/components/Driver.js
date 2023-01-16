import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Driver(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: "18rem" }} className="mt-3 mx-3">
        <Card.Body>
          <Button variant="link" size="lg" onClick={handleShow}>
            {props.data.familyName}, {props.data.givenName}
          </Button>
        </Card.Body>
      </Card>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Driver Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Given Name:</b> {props.data.givenName}
          </p>
          <p>
            <b>Family Name:</b> {props.data.familyName}
          </p>
          <p>
            <b>Driver Number:</b> {props.data.permanentNumber}
          </p>
          <p>
            <b>Date of Birth</b> {props.data.dateOfBirth}
          </p>
          <p>
            <b>Nationality:</b> {props.data.nationality}
          </p>
          <p>
            <b>Wiki Page:</b> <a href={props.data.url}>{props.data.url}</a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
