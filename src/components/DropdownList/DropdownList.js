import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";

import './DropdownList.scss';

const DropdownList = props => {
    const [open, setOpen] = useState(false);

    const handleChangeRange = () => {
        setOpen(false);
    }

    const handleEditList = () => {
        setOpen(false);
        props.setIsEditingList(true);
    }

    const handleDeleteList = () => {
        setOpen(false);
        props.setIsDeletingList(true);
    }

    return (
        <Dropdown 
            open={open}
            setOpen={setOpen}
            button={<i className="dropdown-button__icon fa-solid fa-ellipsis"></i>}
            menu={[
                <div className="dropdown-menu-item__content" onClick={handleChangeRange}>
                    <div className="dropdown-menu-item__logo">
                        <i className="dropdown-menu-item__icon fa-regular fa-circle-check"></i>
                    </div>
                    <div className="dropdown-menu-item__title">
                        Show completed tasks
                    </div>
                </div>,
                <div className="dropdown-menu-item__content" onClick={handleEditList}>
                    <div className="dropdown-menu-item__logo">
                        <i className="dropdown-menu-item__icon fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="dropdown-menu-item__title">
                        Edit list
                    </div>
                </div>,
                <div className="dropdown-menu-item__content" onClick={handleDeleteList}>
                    <div className="dropdown-menu-item__logo">
                        <i className="dropdown-menu-item__icon fa-solid fa-trash-can"></i>
                    </div>
                    <div className="dropdown-menu-item__title">
                        Delete list
                    </div>
                </div>
            ]}
        />
    )
};

export default DropdownList;