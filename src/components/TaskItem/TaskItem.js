import React, { useReducer, useRef, useState } from "react";

import './TaskItem.scss';

const TaskItem = props => {
    const [checked, setChecked] = useState(props.task.completed);
    const taskClass = props.selectedTask && (props.selectedTask.id === props.task.id) ? 'task-item--selected' : '';
    const isChecked = props.task.checked ? 'checked' : '';
    const favoriteIconClass = props.task.favorite
        ? 'task-item__favorite-icon--fill fa-solid fa-star'
        : 'task-item__favorite-icon--empty fa-regular fa-star';

    const handleTaskClick = () => {
        props.toggleTask(props.task.id);
    }

    const handleCheckboxClick = e => {
        e.stopPropagation();
        setChecked(!checked);
        props.toggleTaskState(props.task.id, 'completed');
    }

    const handleFavoriteClick = e => {
        e.stopPropagation();
        props.toggleTaskState(props.task.id, 'favorite');
    }

    return (
        <li className={`task-item ${taskClass}`} onClick={handleTaskClick}>
            <div className="task-item__input" onClick={handleCheckboxClick}>
                <input className="task-item__input-checkbox" type="checkbox" checked={checked} readOnly={true}/>
                <span className="task-item__input-checkmark"></span>
            </div>
            <div className="task-item__description">
                <h6 className="task-item__title">
                    {props.task.name}
                </h6>
                <div className="task-item__options">

                </div>
            </div>
            <div className="task-item__favorite" onClick={handleFavoriteClick}>
                <i className={`task-item__favorite-icon ${favoriteIconClass}`}>
                </i>
            </div>
        </li>
    )
};

export default TaskItem;