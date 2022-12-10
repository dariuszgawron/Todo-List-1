import React, { useEffect, useState } from "react";

import Dropdown from "../Dropdown/Dropdown";

import './DropdownList.scss';

const DropdownList = props => {
    const [open, setOpen] = useState(false);

    const handleChangeRange = () => {
        setOpen(false);
        props.toggleListState(props.selectedList.id, 'showCompletedTask');
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
            title: (props.selectedList.showCompletedTask) ? 'Hide completed tasks' : 'Show completed tasks',
            icon: 'fa-regular fa-circle-check',
            onClick: handleChangeRange,
            system: true
        }, {
            title: 'Edit list',
            icon: 'fa-solid fa-pen-to-square',
            onClick: handleEditList,
            system: false
        }, {
            title: 'Delete list',
            icon: 'fa-solid fa-trash-can',
            onClick: handleDeleteList,
            system: false
        }
    ]

    return (
        <Dropdown 
            open={open}
            setOpen={setOpen}
            button={<i className="dropdown-button__icon fa-solid fa-ellipsis"></i>}
            menu={
                menuList
                    .filter(menuItem => (!props.selectedList.system || menuItem.system))
                    .map(menuItem => (
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