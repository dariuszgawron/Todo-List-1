import React from 'react';

import './TaskList.scss';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {
    // console.log('selected: '+props.selectedList);
    // console.log('system: '+props.systemLists);
    const isSystemList = (props.selectedList && props.systemLists.find(list => list.id === props.selectedList.id));
    // const filter = isSystemList ? props.selectedList.filter : (task) => task.listId === props.selectedList.id;
    const sort = isSystemList ? props.selectedList.sort : (firstTask, secondTask) => firstTask.name.localeCompare(secondTask.name); 
    // console.log(sort);
    // const sort = (firstTask, secondTask) => firstTask.name.localeCompare(secondTask.name); 
    return (
        <div className='task-list'>
            <ul className='task-list__content'>
                {
                    props.tasks
                        // .filter(filter)
                        // .sort((firstTask, secondTask) => firstTask.name - secondTask.name)
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