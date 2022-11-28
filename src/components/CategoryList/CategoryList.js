import React from "react";

import './CategoryList.scss';

import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList = props => {
    return (
        <ul className="category-list">
            {
                props.lists && props.lists.map((list, index) => {
                    return <CategoryItem 
                        list={list} 
                        selectedList={props.selectedList} 
                        toggleList={props.toggleList} 
                        tasks={props.tasks}
                        key={index} 
                        type={props.type}
                    />
                })
            }
        </ul>
    )
};

export default CategoryList;