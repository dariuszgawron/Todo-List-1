import React from "react";

import './Sidenav.scss';

import SidenavHeader from "../SidenavHeader/SidenavHeader";
import SidenavContent from "../SidenavContent/SidenavContent";
import SidenavFooter from "../SidenavFooter/SidenavFooter";

const Sidenav = props => {
    return (
        <header className="header">
            <div className="sidenav" id="sidenav">
                <SidenavHeader setKeyword={props.setKeyword} />
                <SidenavContent 
                    lists={props.lists}
                    selectedList={props.selectedList} 
                    toggleList={props.toggleList} 
                    tasks={props.tasks}
                />
                <SidenavFooter addCustomList={props.addCustomList} />
            </div>
        </header>
    )
};

export default Sidenav;