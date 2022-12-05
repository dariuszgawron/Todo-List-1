import React from "react";

import './Dropdown.scss';

const Dropdown = props => {
    const handleOpen = () => {
        props.setOpen(!props.open);
    }

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={handleOpen}>
                {props.button}
            </button>
            { 
                props.open 
                ?   <ul className={`dropdown-menu ${props.open ? 'dropdown-menu--active' : ''}`}>
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