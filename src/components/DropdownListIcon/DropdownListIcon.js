import React, { useState } from "react";

import './DropdownListIcon.scss';

const DropdownListIcon = props => {
    const [open, setOpen] = useState(false);

    const handleIconClick = () => {
        setOpen(false);
    }

    const listIcons = [{
            icon: <i class="fa-solid fa-briefcase"></i>
        }, {
            icon: <i class="fa-solid fa-utensils"></i>
        }, {
            icon: <i class="fa-solid fa-film"></i>
        }, {
            icon: <i class="fa-solid fa-plane"></i>
        }, {
            icon: <i class="fa-solid fa-car"></i>
        }, {
            icon: <i class="fa-solid fa-basket-shopping"></i>
        }, {
            icon: <i class="fa-solid fa-phone"></i>
        }, {
            icon: <i class="fa-solid fa-wrench"></i>
        }, {
            icon: <i class="fa-solid fa-music"></i>
        }, {
            icon: <i class="fa-regular fa-image"></i>
        }
    ];

    return (
        <div className="dropdown-list-icon">

        </div>
    )
}; 

export default DropdownListIcon;