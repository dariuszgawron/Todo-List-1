import React, { useEffect, useState } from "react";

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

    const menuList = [{
            title: 'Show completed tasks',
            icon: 'fa-regular fa-circle-check',
            onClick: handleChangeRange
        }, {
            title: 'Edit list',
            icon: 'fa-solid fa-pen-to-square',
            onClick: handleEditList
        }, {
            title: 'Delete list',
            icon: 'fa-solid fa-trash-can',
            onClick: handleDeleteList
        }
    ]

    return (
        <Dropdown 
            open={open}
            setOpen={setOpen}
            button={<i className="dropdown-button__icon fa-solid fa-ellipsis"></i>}
            menu={
                menuList.map(menuItem => (
                    <div className="dropdown-menu-item__content" onClick={menuItem.onClick}>
                        <div className="dropdown-menu-item__logo">
                            <i className={`dropdown-menu-item__icon ${menuItem.icon}`}></i>
                        </div>
                        <div className="dropdown-menu-item__title">
                            {menuItem.title}
                        </div>
                 </div>
                ))
            }
        />
    )
};

export default DropdownList;