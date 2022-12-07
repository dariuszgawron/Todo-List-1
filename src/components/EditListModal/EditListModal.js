import React, { useEffect, useState } from "react";

import Modal from "../Modal/Modal";

import './EditListModal.scss';

const EditListModal = props => {
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleIconChange = e => {
        setIcon(e.target.value);
    }
    const handleSaveClick = () => {
        props.editList(props.list.id, name, icon);
        props.setIsEditingList(false);
    };
    const handleCancelClick = () => {
        props.setIsEditingList(false);
    };

    useEffect(() => {
        setName(props.list.name);
        setIcon(props.list.icon);
    }, [props.list])
    
    return (
        <Modal active={props.isEditing}>
            <div className='edit-list-modal__content'>
                <h3 className='edit-list-modal__title'>
                    {props.title}
                </h3>
                <div className='edit-list-modal__description'>
                    <form className="edit-list-modal-form">
                        <input className="edit-list-modal-form__input" type="text" value={name} onChange={handleNameChange} />
                    </form>
                </div>
                <div className='edit-list-modal__buttons'>
                    <button className='edit-list-modal__button edit-list-modal__button--success' onClick={handleSaveClick}>
                        Save
                    </button>
                    <button className='edit-list-modal__button' onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </Modal>
    )
};

export default EditListModal;