import React from "react";

import './Main.scss';

import TaskHeader from '../TaskHeader/TaskHeader';
import TaskList from '../TaskList/TaskList';
import TaskFooter from '../TaskFooter/TaskFooter';
import TaskDetails from "../TaskDetails/TaskDetails";

const Main = props => {
    return (
        <main className="main">
            <TaskHeader activeList={props.activeList} />
            <TaskList activeList={props.activeList} tasks={props.tasks} selectedTask={props.selectedTask} toggleTask={props.toggleTask} />
            <TaskFooter addTask={props.addTask} />
            {/* <TaskDetails /> */}
        </main>
    )
};

export default Main;