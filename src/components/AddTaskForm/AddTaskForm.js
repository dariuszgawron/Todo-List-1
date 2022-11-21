import React, { useState } from "react";

import './AddTaskForm.scss';

const AddTaskForm = props => {
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');

    const handleChange = e => {
        setTaskName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTask(taskName, taskDate);
        setTaskName('');
        setTaskDate('');
    }

    return (
        <div className="task-footer">
            <form className="task-form" id="new-task-form" onSubmit={handleSubmit}>
                <div className="task-form__add" id="task-form-add">
                    <i className="task-form__add-icon fa-solid fa-plus"></i>
                </div>
                <input className="task-form__input" type="text" id="task-form-value" onChange={handleChange} value={taskName} placeholder="Add new task" required />
                <div className="tak-form__options">
                    <div className="task-form-option">
                        <div className="task-form-option__button" id="task-form-date">
                            <i className="task-form-option__icon"></i>
                        </div>
                        <div className="task-form-option__content" id="task-form-date-content">

                        </div>
                    </div>
                    <div className="task-form-option">
                        <div className="task-form-option__button" id="task-form-alarm">
                            <i className="task-form-option__icon"></i>
                        </div>
                        <div className="task-form-option__content" id="task-form-alarm-content">
                            
                        </div>
                    </div>
                    <div className="task-form-option">
                        <div className="task-form-option__button" id="task-form-repeat">
                            <i className="task-form-option__icon" ></i>
                        </div>
                        <div className="task-form-option__content" id="task-form-repeat-content">
                            
                        </div>
                    </div>
                </div> 
            </form>
        </div>
    )
};

export default AddTaskForm;