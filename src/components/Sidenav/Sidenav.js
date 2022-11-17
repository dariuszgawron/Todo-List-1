import React from "react";

import './Sidenav.scss';

import SidenavHeader from "../SidenavHeader/SidenavHeader";
import SidenavContent from "../SidenavContent/SidenavContent";
import SidenavFooter from "../SidenavFooter/SidenavFooter";

const Sidenav = () => {
    return (
        <div className="sidenav">
            <SidenavHeader />
            <SidenavContent />
            <SidenavFooter />
        </div>
    )
};

export default Sidenav;