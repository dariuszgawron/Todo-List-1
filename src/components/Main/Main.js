import React from "react";

import './Main.scss';

import TaskHeader from '../TaskHeader/TaskHeader';
import TaskList from '../TaskList/TaskList';
import TaskFooter from '../TaskFooter/TaskFooter';

const Main = props => {
    return (
        <main className="main">
            <TaskHeader 
                selectedList = {props.selectedList}
                isEditingList = {props.isEditingList}
                setIsEditingList = {props.setIsEditingList}
                isDeletingList = {props.isDeletingList}
                setIsDeletingList = {props.setIsDeletingList}
                toggleListState = {props.toggleListState}
                editListDetails = {props.editListDetails}
                sidenavMenuRef = {props.sidenavMenuRef}
            />
            <TaskList 
                tasks = {props.tasks} 
                selectedTask = {props.selectedTask} 
                toggleTask = {props.toggleTask} 
                toggleTaskState = {props.toggleTaskState}
                editTask = {props.editTask}
                lists = {props.lists}
                selectedList = {props.selectedList} 
                keyword = {props.keyword} 
            />
            <TaskFooter 
                addTask = {props.addTask} 
            />
        </main>
    )
};

export default Main;