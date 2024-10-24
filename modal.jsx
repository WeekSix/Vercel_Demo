import React from 'react';
import './Modal.css';

const Modal = ({isVisible, onClose, Src}) => {

    if (!isVisible) {
        return null;
    }

    const handleOutSideClick = (event) => {
        if (event.target.className === 'modal') {
            onClose();
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
            <span id="closeModal" className="close" onClick={onClose}>
                &times;
            </span>
            <img src={Src} alt={Src} className='modal-image' />
            </div>
        </div>
    );
};

export default Modal;

