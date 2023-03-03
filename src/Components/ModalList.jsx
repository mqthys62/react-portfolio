import React, { useState } from 'react';
import Modal from './Modal';
import image1 from '../assets/pp.png'

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={openModal}>Prévisualisation</button>
      {showModal && (
        <Modal
          imageSrc={image1}
          title="test"
          description="dcxsdwc"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default MyComponent;