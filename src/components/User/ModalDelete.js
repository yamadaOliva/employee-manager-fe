import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react';
const ModalDelete = (props) => {
  
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dele User Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are u sure about that</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.confirmDelete}>
            I am fucking sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export { ModalDelete };
