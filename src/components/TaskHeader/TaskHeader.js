import React from 'react';

import './TaskHeader.scss';

const TaskHeader = (props) => {
    const iconClass = props.selectedList.icon;
    return (
        <div className='task-header'>
            <div className='task-header__container'>
                <div className='task-header__content'>
                    <div className='task-header-menu'>
                        <i className='task-header-menu__icon fa-solid fa-bars'></i>
                    </div>
                    <div className='task-header-details'>
                        <i className={`task-header-details__icon ${iconClass}`}></i>
                        <h3 className='task-header-details__title'>
                            {props.selectedList.name}
                        </h3>
                    </div>
                </div>
                <div className='task-header__content'>
                    <div className='task-header-settings'>
                        <div className='task-header-settings__button'>
                            <i className='task-header-settings__icon fa-solid fa-ellipsis'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TaskHeader;