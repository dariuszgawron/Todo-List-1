import React from "react";

import './SidenavHeader.scss';

import SidenavProfile from "../SidenavProfile/SidenavProfile";
import SearchBar from "../SearchBar/SearchBar";

const SidenavHeader = props => {
    const handleSidenavMenuClose = () => {
        props.sidenavMenuRef.current.classList.remove('header--active');
    }

    return (
        <div className="sidenav-header">
            <div className="sidenav-header-close" onClick={handleSidenavMenuClose}>
                <i className="sidenav-header-close__icon fa-solid fa-xmark"></i>
            </div>
            <SidenavProfile />
            <SearchBar setKeyword={props.setKeyword} />
        </div>
    )
};

export default SidenavHeader;