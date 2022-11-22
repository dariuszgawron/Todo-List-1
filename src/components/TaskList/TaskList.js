import React from 'react';

import './TaskList.scss';

import TaskItem from '../TaskItem/TaskItem';

const TaskList = (props) => {
    return (
        <div className='task-list'>
            <ul className='task-list__content'>
                {
                    props.tasks.map((task, index) => {
                        return <TaskItem task={task} key={index} />
                    })
                }
            </ul>
        </div>
    )
};

export default TaskList;