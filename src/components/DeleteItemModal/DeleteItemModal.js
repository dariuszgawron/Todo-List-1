import React, { useRef, useState } from 'react';

import Modal from '../Modal/Modal';

import './DeleteItemModal.scss';

const DeleteItemModal = props => {
    // const [active, setActive] = useState(true);
    const deleteItemModalRef = useRef(null);

    const handleDeleteClick = () => {
        deleteItemModalRef.current.classList.remove('modal--active');
        setTimeout(() => {
            if(props.onDelete) {
                props.onDelete();
            }
            props.deleteItem(props.itemId);
        }, 300);
    };
    const handleCancelClick = () => {
        deleteItemModalRef.current.classList.remove('modal--active');
        setTimeout(() => {
            if(props.onCancel) {
                props.onCancel();
            }
        }, 300);
    };

    return (
        <Modal active={props.isDeleting} modalRef={deleteItemModalRef}>
            <div className='delete-item-modal__content'>
                <h3 className='delete-item-modal__title'>
                    {props.title}
                </h3>
                <p className='delete-item-modal__description'>
                    {props.description}
                </p>
                <div className='delete-item-modal__buttons'>
                    <button className='delete-item-modal__button delete-item-modal__button--warning' onClick={handleDeleteClick}>
                        Delete
                    </button>
                    <button className='delete-item-modal__button' onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    )
};

export default DeleteItemModal;