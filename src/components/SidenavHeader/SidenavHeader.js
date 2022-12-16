import React from "react";

import './SidenavHeader.scss';

// import SidenavProfile from "../SidenavProfile/SidenavProfile";
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
            <div className="sidenav-header-logo">
                <i className="sidenav-header-logo__icon fa-solid fa-wand-magic-sparkles"></i>
                <h2 className="sidenav-header-logo__title">TODO</h2>
            </div>
            
            {/* <SidenavProfile /> */}
            <SearchBar 
                setKeyword={props.setKeyword} 
                sidenavMenuRef={props.sidenavMenuRef}
            />
        </div>
    )
};

export default SidenavHeader;