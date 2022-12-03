import React from 'react';

import Modal from '../Modal/Modal';

import './DeleteTaskModal.scss';

const DeleteTaskModal = props => {
    const handleDeleteClick = () => {

    };
    const handleCancelClick = () => {

    };

    return (
        <div className='delete-task-modal'>
            <Modal>
                <h3 className='delete-task-modal__title'>
                    {props.title}
                </h3>
                <p className='delete-task-modal__description'>
                    {props.description}
                </p>
                <div className='delete-task-modal__buttons'>
                    <button className='delete-task-modal__button delete-task-modal__button--warning' onClick={handleDeleteClick}>
                        Delete
                    </button>
                    <button className='delete-task-modal__button'>
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    )
};

export default DeleteTaskModal;