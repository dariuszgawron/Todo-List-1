import React from 'react';

import './TaskList.scss';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {
    // const isSystemList = (props.selectedList && props.systemLists.find(list => list.id === props.selectedList.id));
    // const selectedSystemList = (isSystemList) ? props.systemLists.find(list => list.id === props.selectedList.id) : null;
    const isSystemList = (props.selectedList && props.lists.find(list => list.id === props.selectedList.id));
    const selectedSystemList = (isSystemList) ? props.lists.find(list => list.id === props.selectedList.id) : null;
    const filter = isSystemList 
        ? selectedSystemList.filter 
        : (task) => task.listId === props.selectedList.id;
    const sort = isSystemList 
        ? selectedSystemList.sort 
        : (firstTask, secondTask) => firstTask.name.localeCompare(secondTask.name); 
    const keywordFilter = (props.keyword !== '') 
        ? (task => task.name.includes(props.keyword)) 
        : () => true;
    const showSelected = (props.selectedList && props.selectedList.showCompletedTask)
        ? () => true
        : (task) => !task.completed;
    return (
        <div className='task-list'>
            <ul className='task-list__content'>
                {
                    props.tasks
                        .filter(filter)
                        .filter(showSelected)
                        .filter(keywordFilter)
                        .sort(sort)
                        .map((task, index) => {
                        return <TaskItem 
                            task={task} 
                            list={(isSystemList) ? props.lists.find(list => list.id === task.listId) : ''}
                            selectedTask={props.selectedTask} 
                            toggleTask={props.toggleTask} 
                            toggleTaskState={props.toggleTaskState}
                            key={index} />
                    })
                }
            </ul>
        </div>
    )
};

export default TaskList;