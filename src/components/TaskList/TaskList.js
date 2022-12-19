import React from 'react';

import './TaskList.scss';

import TaskItem from '../TaskItem/TaskItem';
import { sortOptions } from '../../api/todoConfig';

const TaskList = (props) => {
    const isSystemList = (props.selectedList && props.selectedList.system);
    const systemList = (isSystemList) 
        ? props.lists.find(list => list.id === props.selectedList.id) 
        : null;
    const filter = isSystemList 
        ? systemList.filter
        : (task) => task.listId === props.selectedList.id;
    const sort = sortOptions.find(sortOption => sortOption.id === props.selectedList.sort).value;
    const keywordFilter = (props.keyword !== '') 
        ? (task => task.name.includes(props.keyword)) 
        : () => true;
    const showSelected = (props.selectedList && props.selectedList.showCompletedTask)
        ? () => true
        : (task) => !task.completed;
    const tasks = props.tasks
        .filter(filter)
        .filter(showSelected)
        .filter(keywordFilter)
        .sort(sort);
    
    return (
        <div className='task-list'>
        {
            (tasks.length>0)
            ?   <ul className='task-list__content'>
                {
                    tasks.map((task, index) => {
                        return <TaskItem 
                            task = {task} 
                            list = {(isSystemList) ? props.lists.find(list => list.id === task.listId) : ''}
                            selectedTask = {props.selectedTask} 
                            toggleTask = {props.toggleTask} 
                            toggleTaskState = {props.toggleTaskState}
                            editTask = {props.editTask}
                            key = {index} />
                    })
                }
                </ul>
            :   <div className='task-list-empty'>
                    <i className="task-list-empty__icon fa-brands fa-optin-monster"></i>
                    <h2 className='task-list-empty__title'>
                        There is no data to display
                    </h2>
                </div>
        }   
        </div>
    )
};

export default TaskList;