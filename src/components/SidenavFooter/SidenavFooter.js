import React from "react";

import './SidenavFooter.scss';

import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";

const SidenavFooter = () => {
    return (
        <div className="sidenav-footer">
            <AddCategoryForm />
        </div>
    )
};

export default SidenavFooter;