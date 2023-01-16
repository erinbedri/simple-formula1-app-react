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
      <Card style={{ width: "18rem" }} className="mt-3 mx-3 text-center">
        <Card.Body>
          <Button variant="link" size="lg" onClick={handleShow}>
            {props.data.circuitName}
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
          <Modal.Title>Circuit Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Circuit Name:</b> {props.data.circuitName}
          </p>
          <p>
            <b>Location:</b> {props.data.Location.locality}
            {", "}
            {props.data.Location.country}
          </p>
          <p>
            <b>Wiki Page:</b> <a href={props.data.url}>click here</a>
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
