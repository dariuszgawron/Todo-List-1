import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";
import { sortOptions } from "../../api/todoConfig";

import './DropdownFilter.scss';

const DropdownFilter = props => {
    const [open, setOpen] = useState(false);

    const handleClick = (sortOption) => {
        setOpen(false);
        props.editListDetails(props.selectedList.id, 'sort', sortOption);
    }

    return (
        <Dropdown 
            open={open}
            setOpen={setOpen}
            button={<i className="dropdown-button__icon fa-solid fa-filter"></i>}
            menu={
                sortOptions
                    .map(menuItem => (
                        <div className={`dropdown-menu-item__content ${props.selectedList.sort===menuItem.id ? 'dropdown-menu-item__content--active' : ''}`} onClick={() => handleClick(menuItem.id)}>
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

export default DropdownFilter;