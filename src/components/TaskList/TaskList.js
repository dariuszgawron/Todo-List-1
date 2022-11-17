import React from 'react';

import './TaskList.scss';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {
    return (
        <ul className='task-list'>
            {
                props.tasks.map(task => {
                    return <TaskItem task={task} />
                })
            }
        </ul>
    )
};

export default TaskList;