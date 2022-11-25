import React from "react";

import './Sidenav.scss';

import SidenavHeader from "../SidenavHeader/SidenavHeader";
import SidenavContent from "../SidenavContent/SidenavContent";
import SidenavFooter from "../SidenavFooter/SidenavFooter";

const Sidenav = props => {
    return (
        <header className="header">
            <div className="sidenav" id="sidenav">
                <SidenavHeader />
                <SidenavContent systemLists={props.systemLists} customLists={props.customLists} selectedList={props.selectedList} toggleList={props.toggleList} />
                <SidenavFooter addCustomList={props.addCustomList} />
            </div>
        </header>
    )
};

export default Sidenav;