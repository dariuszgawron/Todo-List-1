import React from "react";

import './Main.scss';

import TaskHeader from '../TaskHeader/TaskHeader';
import TaskList from '../TaskList/TaskList';
import TaskFooter from '../TaskFooter/TaskFooter';

const Main = props => {
    return (
        <main className="main">
            <TaskHeader activeList={props.activeList} />
            <TaskList activeList={props.activeList} tasks={props.tasks} />
            <TaskFooter addTask={props.addTask} />
        </main>
    )
};

export default Main;