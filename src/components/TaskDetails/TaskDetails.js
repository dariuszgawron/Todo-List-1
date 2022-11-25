import React, { useState } from "react";

import './TaskDetails.scss';

const TaskDetails = props => {
    const [taskId, setTaskId] = useState(null);
    const [taskName, setTaskName] = useState('');
    const [taskRemind, setTaskRemind] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskRepeat, setTaskRepeat] = useState('');
    const [taskFavorite, setTaskFavorite] = useState(false);
    const [taskCompleted, setTaskCompleted] = useState(false);

    return (
        <div className="task-details">
            <div className="task-details-close">
                <i className="task-details-close__icon fa-solid fa-xmark"></i>
            </div>
            <div className="task-details__content">
                <div className="task-details__box">
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <div className="task-details-checkbox">
                                <input className="task-details-checkbox__input" />
                                <span className="task-details-checkbox__checkmark"></span>
                            </div>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__title" onChange={e => e} value="test"/>
                        </div>
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-regular fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="task-details__box">
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-regular fa-bell"></i>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__remind" type="text" placeholder="Remind" onFocus={e => e.target.type='datetime-local'} onBlur={e => e.target.type='text'} onChange={e => e} value="test" />
                        </div>
                    </div>
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-regular fa-calendar-days"></i>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__date" type="text" placeholder="Add a due date" onFocus={e => e.target.type='date'} onBlur={e => e.target.type='text'} onChange={e => e} value="test" />
                        </div>
                    </div>
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-solid fa-arrows-rotate"></i>
                        </div>
                        <div className="task-details__value">
                            <select className="task-details__repeat" name="repeat" defaultValue="">
                                <option value="">Repeat</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="montly">Montly</option>
                                <option value="annually">Annually</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="task-details__box">
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-regular fa-file-lines"></i>
                        </div>
                        <div className="task-details__value">
                            Lista
                        </div>
                    </div>
                </div>
                <div className="task-details__box">
                    {/* <div className="task-details__row"> */}
                        <textarea className="task-details__description" placeholder="Notes" rows="10"></textarea>
                    {/* </div> */}
                </div>
            </div>
            <div className="task-details__footer">
                <div className="task-details__information">
                    Created: x
                </div>
                <div className="task-details-delete">
                    <i className="task-details-delete__icon"></i>
                </div>
            </div>
        </div>
    )
};

export default TaskDetails;