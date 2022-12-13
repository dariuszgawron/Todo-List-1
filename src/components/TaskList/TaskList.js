import React from 'react';

import './TaskList.scss';

import TaskItem from '../TaskItem/TaskItem';
import { sortOptions } from '../../api/todoConfig';

const TaskList = (props) => {
    const isSystemList = (props.selectedList && props.selectedList.system);
    const systemList = (isSystemList) ? props.lists.find(list => list.id === props.selectedList.id) : null;
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
                            editTask={props.editTask}
                            key={index} />
                    })
                }
            </ul>
        </div>
    )
};

export default TaskList;