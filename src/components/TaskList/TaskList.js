import React from 'react';

import './TaskList.scss';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {
    const isSystemList = (props.selectedList && props.systemLists.find(list => list.id === props.selectedList.id));
    const selectedSystemList = (isSystemList) ? props.systemLists.find(list => list.id === props.selectedList.id) : null;
    const filter = isSystemList 
        ? selectedSystemList.filter 
        : (task) => task.listId === props.selectedList.id;
    const sort = isSystemList 
        ? selectedSystemList.sort 
        : (firstTask, secondTask) => firstTask.name.localeCompare(secondTask.name); 
    const keywordFilter = (props.keyword !== '') 
        ? (task => task.name.includes(props.keyword)) 
        : () => true;
    console.log(keywordFilter);
    return (
        <div className='task-list'>
            <ul className='task-list__content'>
                {
                    props.tasks
                        .filter(filter)
                        .filter(keywordFilter)
                        .sort(sort)
                        .map((task, index) => {
                        return <TaskItem task={task} selectedTask={props.selectedTask} toggleTask={props.toggleTask} key={index} />
                    })
                }
            </ul>
        </div>
    )
};

export default TaskList;