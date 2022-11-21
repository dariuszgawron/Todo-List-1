import React from "react";

import './TaskItem.scss';

const TaskItem = (props) => {
    const isChecked = props.task.checked ? 'checked' : '';
    const favoriteIconClass = props.task.favorite
        ? 'task-item__favorite-icon--fill fa-solid fa-star'
        : 'task-item__favorite-icon--empty fa-regular fa-star';

    return (
        <li className="task-item">
            <div className="task-item__input">
                <input className="task-item__input-checkbox" />
                <span className="task-item__input-checkmark"></span>
            </div>
            <div className="task-item__description">
                <h6 className="task-item__title">
                    {props.task.name}
                </h6>
                <div className="task-item__options">

                </div>
            </div>
            <div className="task-item__favorite">
                <i className={`task-item__favorite-icon ${favoriteIconClass}`}>

                </i>
            </div>
        </li>
    )
};

export default TaskItem;