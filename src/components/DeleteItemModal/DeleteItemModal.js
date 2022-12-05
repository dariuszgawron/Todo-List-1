import React, { useState } from 'react';

import Modal from '../Modal/Modal';

import './DeleteItemModal.scss';

const DeleteItemModal = props => {
    // const [active, setActive] = useState(true);

    const handleDeleteClick = () => {
        if(props.onDelete) {
            props.onDelete();
        }
        props.deleteItem(props.itemId);
    };
    const handleCancelClick = () => {
        if(props.onCancel) {
            props.onCancel();
        }
    };

    return (
        // <div className='delete-item-modal'>
            <Modal active={props.isDeleting}>
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
        // </div>
    )
};

export default DeleteItemModal;