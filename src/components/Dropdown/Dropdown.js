import React, { useEffect, useRef } from "react";

import './Dropdown.scss';

const Dropdown = props => {
    const dropdownMenuRef = useRef(null);

    const handleOpen = () => {
        props.setOpen(!props.open);
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if(dropdownMenuRef.current && !dropdownMenuRef.current.contains(e.target)) {
                props.setOpen(false);
            }
        }
        if(props.open) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [dropdownMenuRef, props]);

    return (
        <div className="dropdown">
            <button className={`dropdown-button ${props.open ? 'dropdown-button--active' : ''}`} onClick={handleOpen}>
                {props.button}
            </button>
            { 
                props.open 
                ?   <ul className={`dropdown-menu ${props.open ? 'dropdown-menu--active' : ''}`} ref={dropdownMenuRef}>
                        {props.menu.map((menuItem, index) => (
                            <li className="dropdown-menu-item" key={index}>
                                {menuItem}
                            </li>
                        ))}
                    </ul>
                :   null
            }
            
        </div>
    )
};

export default Dropdown;