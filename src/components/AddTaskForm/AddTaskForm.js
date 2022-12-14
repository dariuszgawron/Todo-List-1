import React, { useState } from "react";

import './AddTaskForm.scss';

const AddTaskForm = props => {
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskRemind, setTaskRemind] = useState('');
    const [taskRepeat, setTaskRepeat] = useState('');
    const [activeOption, setActiveOption] = useState('');

    const handleNameChange = e => {
        setTaskName(e.target.value);
    }
    const handleDateChange = e => {
        setTaskDate(e.target.value);
    }
    const handleRemindChange = e => {
        setTaskRemind(e.target.value);
    }
    const handleRepeatChange = e => {
        setTaskRepeat(e.target.value);
    }
    const handleOptionClick = (option) => {
        if(activeOption === option) {
            setActiveOption('');
        } else {
            setActiveOption(option);
        }
    }
    const handleNameFocus = () => {
        setActiveOption('');
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addTask(taskName, taskDate, taskRemind, taskRepeat);
        setTaskName('');
        setTaskDate('');
        setTaskRemind('');
        setTaskRepeat('');
    }

    return (
        <form className="task-form" id="new-task-form" onSubmit={handleSubmit}>
            <button className="task-form__add" id="task-form-add" type="submit">
                <i className="task-form__add-icon fa-solid fa-plus"></i>
            </button>
            <input className="task-form__input" type="text" id="task-form-value" onChange={handleNameChange} onFocus={handleNameFocus} value={taskName} placeholder="Add new task" required />
            <div className="task-form__options">
                <div className="task-form-option">
                    <div className="task-form-option__button" onClick={() => handleOptionClick('date')}>
                        <i className="task-form-option__icon fa-solid fa-calendar-days"></i>
                    </div>
                    <div className={`task-form-option__content ${activeOption === 'date' ? 'task-form-option__content--active' : ''}`}>
                        <input className="task-form-option__input" type="date" value={taskDate} onChange={handleDateChange} />
                    </div>
                </div>
                <div className="task-form-option">
                    <div className="task-form-option__button" onClick={() => handleOptionClick('remind')}>
                        <i className="task-form-option__icon fa-regular fa-bell"></i>
                    </div>
                    <div className={`task-form-option__content ${activeOption === 'remind' ? 'task-form-option__content--active' : ''}`}>
                        <input className="task-form-option__input" type="datetime-local" value={taskRemind} onChange={handleRemindChange} />
                    </div>
                </div>
                <div className="task-form-option">
                    <div className="task-form-option__button" onClick={() => handleOptionClick('repeat')}>
                        <i className="task-form-option__icon fa-solid fa-arrows-rotate" ></i>
                    </div>
                    <div className={`task-form-option__content ${activeOption === 'repeat' ? 'task-form-option__content--active' : ''}`} >
                        <select className="task-form-option__input" name="repeat" value={taskRepeat} onChange={handleRepeatChange}>
                            <option value="">Repeat</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="montly">Montly</option>
                            <option value="annually">Annually</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    )
};

export default AddTaskForm;