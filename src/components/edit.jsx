import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditableForm from "./EditableForm";
import "./edit.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Open Modal button ");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={openModal}>
        Edit
      </Button>

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Body>
          <EditableForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;
