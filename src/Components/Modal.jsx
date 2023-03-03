import React from 'react';

// const Modal = ({ imageSrc, title, description, onClose }) => {
//  return (
//    <div className="modal">
//      <div className="modal-content">
//        <span className="close" onClick={onClose}>&times;</span>
//        <img src={imageSrc} alt={title} />
//        <h2>{title}</h2>
//        <p>{description}</p>
//      </div>
//    </div>
//  );
// };

export default function Modal(props, { onClose }) {
  const { title, image, description, show } = props;
  return (
    <div className={`modal ${show ? "modal--open" : ""}`}>
      <div className="modal__content">
        <span className="modal__close-button" onClick={() => onClose(true)}>&times;</span>
        <img className='modal__img' src={image} alt={title} />
        <h2 className='modal__title'>{title}</h2>
        <p className='modal__description'>{description}</p>
      </div>
    </div>
  );
}