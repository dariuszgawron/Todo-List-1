import React, { useEffect, useReducer, useRef, useState } from "react";

import './TaskItem.scss';

const TaskItem = props => {
    const [checked, setChecked] = useState(false);
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
        // setChecked(!checked);
        props.toggleTaskState(props.task.id, 'completed');
    }

    const handleFavoriteClick = e => {
        e.stopPropagation();
        props.toggleTaskState(props.task.id, 'favorite');
    }

    const getRemainingTime = (date) => {
        if(date === '') return '';
        const today = (new Date());
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const selectedDate = new Date(date);
        const todayInHours = today.setHours(0, 0, 0, 0);
        const tomorrowInHours = tomorrow.setHours(0, 0, 0, 0);
        const selectedDateInHours = selectedDate.setHours(0, 0, 0, 0);
        let remainingTime = '';
        if(selectedDateInHours === todayInHours) {
            remainingTime = 'Today';
        } else if (selectedDateInHours === tomorrowInHours) {
            remainingTime = 'Tomorrow';
        } else if (selectedDateInHours <= todayInHours) {
            remainingTime = 'Overdue';
        } else if (selectedDateInHours !== '') {
            const options = {
                weekday: "short",
                day: "numeric",
                month: "short"
            };
            remainingTime = selectedDate.toLocaleDateString("en-GB", options);
        }
        return remainingTime;
    }
    const remainingTime = getRemainingTime(props.task.date);

    useEffect(() => {
        setChecked(props.task.completed);
    }, [props.task.completed])

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
                    {
                        props.list !== ''
                        ?   <span className="task-item__options-item">
                                {props.list && props.list.name}
                            </span>
                        :   ''
                    }           
                    {
                        remainingTime !== '' 
                        ?   <span className={`task-item__options-item ${remainingTime === 'Overdue' ? 'task-item__options-item--warning' : '' }`}>
                                {remainingTime}
                            </span>
                        :   ''
                    }
                    {
                        props.task.repeat !== ''
                        ?   <span className="task-item__options-item">
                                <i className="fa-solid fa-rotate"></i>
                            </span>
                        :   ''
                    }
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