import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";
import { sortOptions } from "../../api/todoConfig";

import './DropdownFilter.scss';

const DropdownFilter = props => {
    const [open, setOpen] = useState(false);

    const handleClick = (sortOption) => {
        props.toggleListState(props.selectedList, sortOption);
    }

    // const menuList = [{
    //     title: 'Alphabetically',
    //     icon: 'fa-solid fa-arrow-down-a-z',
    //     value: '',
    // }, {
    //     title: 'Alphabetically',
    //     icon: 'fa-solid fa-arrow-up-a-z',
    //     value: '',
    // }, {
    //     title: 'Creation date',
    //     icon: 'fa-solid fa-arrow-down-1-9',
    //     value: '',
    // }, {
    //     title: 'Creation date',
    //     icon: 'fa-solid fa-arrow-up-1-9',
    //     value: '',
    // }, {
    //     title: 'Importance',
    //     icon: 'fa-solid fa-arrow-down-short-wide',
    //     value: '',
    // }, {
    //     title: 'Importance',
    //     icon: 'fa-solid fa-arrow-up-short-wide',
    //     value: '',
    // }
// ]

    return (
        <Dropdown 
            open={open}
            setOpen={setOpen}
            button={<i className="dropdown-button__icon fa-solid fa-filter"></i>}
            menu={
                sortOptions
                    .map(menuItem => (
                        <div className="dropdown-menu-item__content" onClick={() => handleClick(menuItem.id)}>
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