import * as React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal.tsx';

const Button = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowModal(true)}
      >Open modal
      </button>
      <Modal
        show={showModal}
        onClose={closeModal}
      />
    </>

  );
};

export default Button;