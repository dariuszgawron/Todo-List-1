import React from "react";

import './Main.scss';

import TaskHeader from '../TaskHeader/TaskHeader';
import TaskContent from '../TaskList/TaskList';
import TaskFooter from '../TaskFooter/TaskFooter';

const Main = props => {
    return (
        <main>
            <TaskHeader activeList={props.activeList} />
            <TaskContent activeList={props.activeList} tasks={props.tasks} />
            <TaskFooter />
        </main>
    )
};

export default Main;