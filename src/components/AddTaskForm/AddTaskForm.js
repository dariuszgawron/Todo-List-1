import React from "react";

import './AddTaskForm.scss';

const AddTaskForm = () => {
    return (
        <div className="task-footer">
            <form className="task-form" id="new-task-form">
                <div className="task-form__add" id="task-form-add">
                    <i className="task-form__add-icon fa-solid fa-plus"></i>
                    <input className="task-form__input" type="text" id="task-form-value" required />
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
                </div> 
            </form>
        </div>
    )
};

export default AddTaskForm;