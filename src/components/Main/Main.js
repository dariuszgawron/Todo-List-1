import React from "react";

import './Main.scss';

import TaskHeader from '../TaskHeader/TaskHeader';
import TaskList from '../TaskList/TaskList';
import TaskFooter from '../TaskFooter/TaskFooter';
import TaskDetails from "../TaskDetails/TaskDetails";

const Main = props => {
    return (
        <main className="main">
            <TaskHeader 
                selectedList={props.selectedList}
                isEditingList={props.isEditingList}
                setIsEditingList={props.setIsEditingList}
                isDeletingList={props.isDeletingList}
                setIsDeletingList={props.setIsDeletingList}
            />
            <TaskList 
                tasks={props.tasks} 
                selectedTask={props.selectedTask} 
                toggleTask={props.toggleTask} 
                toggleTaskState={props.toggleTaskState}
                lists={props.lists} 
                systemLists={props.systemLists}
                selectedList={props.selectedList} 
                keyword={props.keyword} 
            />
            <TaskFooter addTask={props.addTask} />
            {/* <TaskDetails /> */}
        </main>
    )
};

export default Main;