import React from 'react';

import './SidenavContent.scss';

import CategoryList from '../CategoryList/CategoryList';

const SidenavContent = props => {
    return (
        <div className='sidenav-content'>
            <div className='sidenav-content__system-lists'>
                <CategoryList lists={props.systemLists} />
            </div>
            <hr/>
            <div className='sidenav-content__custom-lists'>
                {/* <CategoryList lists={props.customLists} /> */}
            </div>
        </div>
    )
};

export default SidenavContent;