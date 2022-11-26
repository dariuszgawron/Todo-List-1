import React from "react";

import './CategoryItem.scss';

const CategoryItem = props => {
    const categoryClass = (props.selectedList && (props.selectedList.id === props.list.id)) ? 'category-item--selected' : '';

    const handleClick = () => {
        props.toggleList(props.list.id);
    }

    return (
        <li className={`category-item ${categoryClass}`} onClick={handleClick}>
            <div className="category-item__content">
                <h3 className="category-item__title">
                    <i className={`category-item__icon ${props.list.icon || 'fa-solid fa-bars'}`}></i>
                    {props.list.name}
                </h3>
                <div className="category-item__counter">
                    X
                </div>
            </div>
        </li>
    )
};

export default CategoryItem;