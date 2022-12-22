import React, { useEffect, useRef, useState } from "react";

import Modal from "../Modal/Modal";
import DropdownListIcon from "../DropdownListIcon/DropdownListIcon";

import './EditListModal.scss';

const EditListModal = props => {
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');
    const editListModalRef = useRef(null);

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleSaveClick = () => {
        editListModalRef.current.classList.remove('modal--active');
        setTimeout(() => {
            props.editList(props.list.id, name, icon);
            props.setIsEditingList(false);
        }, 300);
        
    };
    const handleCancelClick = () => {
        editListModalRef.current.classList.remove('modal--active');
        setTimeout(() => {
            props.setIsEditingList(false);
        }, 300);
    };

    useEffect(() => {
        setName(props.list.name);
        setIcon(props.list.icon);
    }, [props.list])
    
    return (
        <Modal active={props.isEditing} modalRef={editListModalRef}>
            <div className='edit-list-modal__content'>
                <h3 className='edit-list-modal__title'>
                    {props.title}
                </h3>
                <div className='edit-list-modal__description'>
                    <form className="edit-list-modal-form" onSubmit={handleSaveClick}>
                        <DropdownListIcon
                            icon = {icon}
                            setIcon = {setIcon}
                        />
                        <input className="edit-list-modal-form__input" type="text" value={name} onChange={handleNameChange} required/>
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