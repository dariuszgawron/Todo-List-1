import React from "react";

import './SidenavHeader.scss';

import SidenavProfile from "../SidenavProfile/SidenavProfile";
import SearchBar from "../SearchBar/SearchBar";

const SidenavHeader = props => {
    return (
        <div className="sidenav-header">
            <SidenavProfile />
            <SearchBar setKeyword={props.setKeyword} />
        </div>
    )
};

export default SidenavHeader;