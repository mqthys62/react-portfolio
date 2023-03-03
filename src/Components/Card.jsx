import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Modal } from 'bf-component-modal';



export default function Card(props, { setIsModalOpen, isModalOpen }) {
  const { description, title } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal
        title={"My modal header title"}
        description={"My modal body content"}
        show={showModal} // Boolean used to show or not the modal
        onClose={(event) => setShowModal(false)} // Action when modal closing
      />
      <div onClick={() => setShowModal(!showModal)} className='card'>
        <h3 className='card__title'><Link className='card__title' to={'/Portfolio'}>{title}</Link></h3>
        <p className='card_description'>{description}</p>
      </div>
    </>
  );
}