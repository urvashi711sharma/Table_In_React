import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditableForm from "./EditableForm";
import "./edit.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [formDataArray, setFormDataArray] = useState([]);

  const openModal = (index) => {
    console.log("Open Modal button ");
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        variant="outline-primary"
        onClick={() => openModal({ currentIndex })}>
        Edit
      </Button>

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Body>
          {currentIndex !== null && (
            <EditableForm
              index={currentIndex}
              initialData={formDataArray[currentIndex]}
              onClose={closeModal}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import { Button, Modal } from "react-bootstrap";
// import EditableForm from "./EditableForm";
// import "./edit.css";

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(null);

//   const openModal = (index) => {
//     console.log("Open Modal button");
//     setCurrentIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setCurrentIndex(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outline-primary" onClick={() => openModal(currentIndex)}>
//         Edit
//       </Button>

//       <Modal show={isModalOpen} onHide={closeModal}>
//         <Modal.Body>
//           {currentIndex !== null && (
//             <EditableForm index={currentIndex} onClose={closeModal} />
//           )}
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default App;
