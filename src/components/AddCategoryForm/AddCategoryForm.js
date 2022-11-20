import React, { useState } from "react";

import './AddCategoryForm.scss';

const AddCategoryForm = (props) => {
    const [listName, setListName] = useState('');

    const handleChange = e => {
        setListName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addCustomList(listName);
        setListName('');
    };

    return (
        <form className="category-form" id="new-category-form" onSubmit={handleSubmit}>
            <div className="category-form__submit">
                <i className="category-form__submit-icon fa-solid fa-plus"></i>
            </div>
            <input className="category-form__input" type="text" placeholder="Add new list" id="new-category-value" value={listName} onChange={handleChange} required/>
        </form>
    )
};

export default AddCategoryForm;