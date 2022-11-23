import React from "react";

import './TaskDetails.scss';

const TaskDetails = props => {
    return (
        <div className="task-details">
            <div className="task-details-close">
                <i className="task-details-close__icon fa-solid fa-xmark"></i>
            </div>
            <div className="task-details__content">
                <div className="task-details__box">
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <input className="task-details__checkbox" />
                            <span className="task-details__checkmark"></span>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__title" />
                        </div>
                        <div className="task-details__logo">
                            <i className="task-details__icon"></i>
                        </div>
                    </div>
                </div>
                <div className="task-details__box">
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-regular fa-bell"></i>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__remind" />
                        </div>
                    </div>
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-regular fa-calendar-days"></i>
                        </div>
                        <div className="task-details__value">
                            <input className="task-details__date" />
                        </div>
                    </div>
                    <div className="task-details__row">
                        <div className="task-details__logo">
                            <i className="task-details__icon fa-solid fa-arrows-rotate"></i>
                        </div>
                        <div className="task-details__value">
                            <select className="task-details__repeat">
                                <option value="" selected>Repeat</option>
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
                    <div className="task-details__row">
                        <textarea className="task-details__description" placeholder="Notes" rows="10"></textarea>
                    </div>
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