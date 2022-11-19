import React from "react";

import './SidenavHeader.scss';

import SidenavProfile from "../SidenavProfile/SidenavProfile";
import SearchBar from "../SearchBar/SearchBar";

const SidenavHeader = () => {
    return (
        <div className="sidenav-header">
            <SidenavProfile />
            <SearchBar />
        </div>
    )
};

export default SidenavHeader;