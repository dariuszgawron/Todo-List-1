import React from "react";

import './TaskFooter.scss';

import AddTaskForm from "../AddTaskForm/AddTaskForm";

const TaskFooter = () => {
    return (
        <div className="task-footer">
            <AddTaskForm />
        </div>
    )
};

export default TaskFooter;