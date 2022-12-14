import React from "react";

import './Sidenav.scss';

import SidenavHeader from "../SidenavHeader/SidenavHeader";
import SidenavContent from "../SidenavContent/SidenavContent";
import SidenavFooter from "../SidenavFooter/SidenavFooter";

const Sidenav = props => {
    return (
        <header className="header" ref={props.sidenavMenuRef}>
            <div className="sidenav" id="sidenav">
                <SidenavHeader 
                    setKeyword = {props.setKeyword} 
                    sidenavMenuRef = {props.sidenavMenuRef}
                />
                <SidenavContent 
                    lists = {props.lists}
                    selectedList = {props.selectedList} 
                    toggleList = {props.toggleList} 
                    tasks = {props.tasks}
                    sidenavMenuRef = {props.sidenavMenuRef}
                />
                <SidenavFooter 
                    addCustomList = {props.addCustomList} 
                />
            </div>
        </header>
    )
};

export default Sidenav;