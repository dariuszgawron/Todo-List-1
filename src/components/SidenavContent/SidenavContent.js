import React from 'react';

import './SidenavContent.scss';

import CategoryList from '../CategoryList/CategoryList';

const SidenavContent = props => {
    return (
        <div className='sidenav-content'>
            <div className='sidenav-content__item'>
                <CategoryList 
                    lists={props.lists.filter(list => list.system)}
                    selectedList={props.selectedList} 
                    toggleList={props.toggleList} 
                    tasks={props.tasks}
                    type='system'
                />
            </div>
            <hr className='sidenav-content__line' />
            <div className='sidenav-content__item'>
                <CategoryList 
                    lists={props.lists.filter(list => !list.system)}
                    selectedList={props.selectedList} 
                    toggleList={props.toggleList} 
                    tasks={props.tasks}
                    system='custom'
                />
            </div>
        </div>
    )
};

export default SidenavContent;