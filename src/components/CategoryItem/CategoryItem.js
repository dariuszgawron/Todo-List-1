import React from "react";

import './CategoryItem.scss';

const CategoryItem = props => {
    return (
        <li className="category-item">
            <div className="category-item__content">
                <h3 className="category-item__title">
                    <i className="caategory-item__icon"></i>
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