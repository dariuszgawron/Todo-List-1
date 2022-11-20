import React from "react";

import './Sidenav.scss';

import SidenavHeader from "../SidenavHeader/SidenavHeader";
import SidenavContent from "../SidenavContent/SidenavContent";
import SidenavFooter from "../SidenavFooter/SidenavFooter";

const Sidenav = props => {
    return (
        <div className="sidenav" id="sidenav">
            <SidenavHeader />
            <SidenavContent systemLists={props.systemLists} customLists={props.customLists}  />
            <SidenavFooter addCustomList={props.addCustomList} />
        </div>
    )
};

export default Sidenav;