import React from 'react';

import './TaskHeader.scss';

const TaskHeader = (props) => {
    return (
        <div className='task-header'>
            <div className='task-header__container'>
                <div className='task-header__content'>
                    <div className='task-header-menu'>
                        <i className='task-header-menu__icon fa-solid fa-bars'></i>
                    </div>
                    <div className='task-header-details'>
                        <i className='task-header-details__icon fa-solid fa-table-list'></i>
                        <h3 className='task-header-details__title'>
                            Test
                        </h3>
                    </div>
                </div>
                <div className='task-header__content'>

                </div>
            </div>
        </div>
    )
};

export default TaskHeader;