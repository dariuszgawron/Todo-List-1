import React, { useEffect, useRef, useState } from "react";

import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";

import './TaskDetails.scss';

const TaskDetails = props => {
    const [open, setOpen] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [taskRemind, setTaskRemind] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskRepeat, setTaskRepeat] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskFavorite, setTaskFavorite] = useState(false);
    const [taskCompleted, setTaskCompleted] = useState(false);
    const taskInputDateRef = useRef(null);
    const taskInputRepeatRef = useRef(null);

    const handleCloseClick = () => {
        props.hideTaskDetails();
    }

    useEffect(() => {
        setOpen(props.isEditingTask);
        setTaskName(props.task.name);
        setTaskRemind(props.task.remind);
        setTaskDate(props.task.date);
        setTaskRepeat(props.task.repeat);
        setTaskDescription(props.task.description);
        setTaskFavorite(props.task.favorite);
        setTaskCompleted(props.task.completed);
    }, [props.task, props.isEditingTask]);

    const handleCheckboxClick = () => {
        props.toggleTaskState(props.task.id, 'completed');
    }

    const favoriteIconClass = taskFavorite
        ? 'task-details__icon--fill fa-solid fa-star'
        : 'task-details__icon--empty fa-regular fa-star';

    const handleFavoriteClick = () => {
        props.editTask(props.task.id, 'favorite', !props.task.favorite);
    }

    const handleDeleteClick = () => {
        props.setIsDeletingTask(true);
    }

    const handleNameChange = e => {
        setTaskName(e.target.value);
    }
    const handleRemindChange = e => {
        setTaskRemind(e.target.value);
    }
    const handleDateChange = e => {
        setTaskDate(e.target.value);
    }
    const handleRepeatChange = e => {
        setTaskRepeat(e.target.value);
        props.editTask(props.task.id, 'repeat', e.target.value);
    }
    const handleDescriptionChange = e => {
        setTaskDescription(e.target.value);
    }

    const handleNameBlur = e => {
        props.editTask(props.task.id, 'name', e.target.value);
    }
    const handleRemindBlur = e => {
        props.editTask(props.task.id, 'remind', e.target.value);
        e.target.type='text';
    }
    const handleDateBlur = e => {
        props.editTask(props.task.id, 'date', e.target.value);
        e.target.type='text';
    }
    const handleDescriptionBlur = e => {
        props.editTask(props.task.id, 'description', e.target.value);
    }

    const getTaskTimeStamp = () => {
        let createDate = new Date(props.task.timeStamp);
        createDate = createDate.toLocaleString('default', { dataStyle: 'short' })
        return createDate;
    }

    const onDelete = () => {
        props.hideTaskDetails();
        props.setIsDeletingTask(false);
    }

    const onCancel = () => {
        props.setIsDeletingTask(false);
    }

    return (
        <div className={`task-details ${open ? 'task-details--active' : ''}`} ref={props.taskDetailsRef}>
            <div className="task-details-close" onClick={handleCloseClick}>
                <i className="task-details-close__icon fa-solid fa-xmark"></i>
            </div>
            <div className="task-details__content">
                <div className="task-details__box">
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <div className="task-details__input" onClick={handleCheckboxClick}>
                                <input className="task-details__input-checkbox" type="checkbox" checked={taskCompleted} readOnly={true}/>
                                <span className="task-details__input-checkmark"></span>
                            </div>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__title" type="text" value={taskName} onChange={handleNameChange} onBlur={handleNameBlur} />
                        </div>
                        <div className="task-details-favorite" onClick={handleFavoriteClick}>
                            <i className={`task-details-favorite__icon ${favoriteIconClass}`}></i>
                        </div>
                    </div>
                </div>
                <div className="task-details__box">
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-regular fa-bell"></i>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__remind" type="text" placeholder="Remind" onFocus={e => e.target.type='datetime-local'} onBlur={handleRemindBlur} onChange={handleRemindChange} value={taskRemind} />
                        </div>
                    </div>
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-regular fa-calendar-days"></i>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__date" type="text" placeholder="Execution date" onFocus={e => e.target.type='date'} onBlur={handleDateBlur} onChange={handleDateChange} value={taskDate} ref={taskInputDateRef} />
                        </div>
                    </div>
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-solid fa-arrows-rotate"></i>
                        </div>
                        <div className="task-details__value">
                            <select className="task-details__repeat" name="repeat" value={taskRepeat} onChange={handleRepeatChange} required>
                                <option className="task-details__repeat-option" value="" ref={taskInputRepeatRef}>Repeat</option>
                                <option className="task-details__repeat-option" value="daily">Daily</option>
                                <option className="task-details__repeat-option" value="weekly">Weekly</option>
                                <option className="task-details__repeat-option" value="montly">Montly</option>
                                <option className="task-details__repeat-option" value="annually">Annually</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="task-details__box">
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className={`task-details__icon ${props.list.icon}`}></i>
                        </div>
                        <div className="task-details__value">
                            {props.list.name}
                        </div>
                    </div>
                </div>
                <div className="task-details__box">
                    <textarea className="task-details__description" placeholder="Notes" value={taskDescription} onChange={handleDescriptionChange} onBlur={handleDescriptionBlur} rows="8"></textarea>
                </div>
            </div>
            <div className="task-details__footer">
                <div className="task-details__information">
                    Created: {getTaskTimeStamp()}
                </div>
                <div className="task-details-delete" onClick={handleDeleteClick}>
                    <i className="task-details-delete__icon fa-regular fa-trash-can"></i>
                </div>
            </div>
            {   
                props.isDeletingTask &&
                <DeleteItemModal 
                    title = "Delete task"
                    description = {`Are you sure you want to delete the "${taskName}" task?`}
                    itemId = {props.task.id}
                    deleteItem = {props.deleteTask}
                    onDelete = {onDelete}
                    onCancel = {onCancel}
                    isDeleting = {props.isDeletingTask}
                    setIsDeleting = {props.setIsDeletingTask}
                />
            }
        </div>
    )
};

export default TaskDetails;