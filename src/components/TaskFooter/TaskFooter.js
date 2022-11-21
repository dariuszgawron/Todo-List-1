import React from "react";

import './TaskFooter.scss';

import AddTaskForm from "../AddTaskForm/AddTaskForm";

const TaskFooter = props => {
    return (
        <div className="task-footer">
            <AddTaskForm addTask={props.addTask} />
        </div>
    )
};

export default TaskFooter;