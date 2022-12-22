import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";

import './DropdownListIcon.scss';

const DropdownListIcon = props => {
    const [open, setOpen] = useState(false);

    const handleIconClick = (className) => {
        props.setIcon(className);
        setOpen(false);
    }

    const listIcons = [{
            class: "fa-solid fa-list"
        }, {
            class: "fa-solid fa-list-check"
        }, {
            class: "fa-solid fa-list-ol"
        }, {
            class: "fa-solid fa-heart"
        }, {
            class: "fa-solid fa-briefcase"
        }, {
            class: "fa-solid fa-utensils"
        }, {
            class: "fa-solid fa-film"
        }, {
            class: "fa-solid fa-plane"
        }, {
            class: "fa-solid fa-car"
        }, {
            class: "fa-solid fa-basket-shopping"
        }, {
            class: "fa-solid fa-phone"
        }, {
            class: "fa-solid fa-wrench"
        }, {
            class: "fa-solid fa-music"
        }, {
            class: "fa-solid fa-volleyball"
        }, {
            class: "fa-regular fa-image"
        }
    ];

    return (
        <Dropdown
            open = {open}
            setOpen = {setOpen}
            button = {<i className={`dropdown-button__icon ${props.icon}`}></i>}
            menuClass = "dropdown-menu--grid-6"
            menu = {
                listIcons
                    .map(listIcon => (
                        <div className={`dropdown-menu-item__content ${props.icon === listIcon.class ? 'dropdown-menu-item__content--active' : ''}`} onClick={() => handleIconClick(listIcon.class)}>
                            <div className="dropdown-menu-item__logo">
                                <i className={`dropdown-menu-item__icon ${listIcon.class}`}></i>
                            </div>
                        </div>
                ))
            }
        />
    )
}; 

export default DropdownListIcon;