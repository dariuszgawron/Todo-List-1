import React from 'react';

import './SidenavContent.scss';

import CategoryList from '../CategoryList/CategoryList';

const SidenavContent = props => {
    return (
        <div className='sidenav-content'>
            <div className='sidenav-content__item'>
                <CategoryList lists={props.systemLists} selectedList={props.selectedList} toggleList={props.toggleList} />
            </div>
            <hr className='sidenav-content__line' />
            <div className='sidenav-content__item'>
                <CategoryList lists={props.customLists} selectedList={props.selectedList} toggleList={props.toggleList} />
            </div>
        </div>
    )
};

export default SidenavContent;