import React from "react";

import './CategoryItem.scss';

const CategoryItem = props => {
    const categoryClass = (props.selectedList && (props.selectedList.id === props.list.id)) ? 'category-item--selected' : '';
    const filter = (props.type === 'system') 
        ? props.list.filter 
        : (task) => task.listId === props.list.id;
    let numberOfTasks = props.tasks.filter(filter).filter(task => !task.completed).length;
    if(!numberOfTasks)
        numberOfTasks='';

    const handleClick = () => {
        props.toggleList(props.list.id);
    }

    return (
        <li className={`category-item ${categoryClass}`} onClick={handleClick}>
            <div className="category-item__content">
                <h3 className="category-item__title">
                    <i className={`category-item__icon ${props.list.icon || 'fa-solid fa-list'}`}></i>
                    {props.list.name}
                </h3>
                <div className="category-item__counter">
                    {numberOfTasks}
                </div>
            </div>
        </li>
    )
};

export default CategoryItem;