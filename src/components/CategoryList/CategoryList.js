import React from "react";

import './CategoryList.scss';

const CategoryList = props => {
    return (
        <ul className="category-list">
            {
                props.lists && props.lists.map((list,index) => {
                    return (
                        <li className="category-list__item" key={index}>
                            <a href="#Test" className="category-list__link">
                                <div className="category-list__content">
                                    <h3 className="category-list__title">
                                        <i className="caategory-list__icon"></i>
                                        {list.name}
                                    </h3>
                                    <div className="category-list__counter">
                                        X
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default CategoryList;