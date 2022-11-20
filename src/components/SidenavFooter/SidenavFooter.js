import React from "react";

import './SidenavFooter.scss';

import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";

const SidenavFooter = (props) => {
    return (
        <div className="sidenav-footer">
            <AddCategoryForm addCustomList={props.addCustomList} />
        </div>
    )
};

export default SidenavFooter;