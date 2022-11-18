import React from "react";

import './AddCategoryForm.scss';

const AddCategoryForm = (props) => {
    return (
        <form className="category-form" id="new-category-form">
            <div className="category-form__submit">
                <i className="category-form__submit-icon fa-solid fa-plus"></i>
            </div>
            <input className="category-form__input" type="text" placeholder="Add new list" id="new-category-value" required/>
        </form>
    )
};

export default AddCategoryForm;