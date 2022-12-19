import React from 'react';

import DropdownList from '../DropdownList/DropdownList';
import DropdownFilter from '../DropdownFilter/DropdownFilter';

import './TaskHeader.scss';

const TaskHeader = (props) => {
    const iconClass = props.selectedList ? props.selectedList.icon : '';

    // const onDelete = () => {
    //     props.setIsEditingTask(false);
    //     props.setIsDeletingList(false);
    // }

    // const onCancel = () => {
    //     props.setIsDeletingList(false);
    // }

    const handleSidenavOpenClick = () => {
        props.sidenavMenuRef.current.classList.add('header--active');
    }

    return (
        <div className='task-header'>
            <div className='task-header__container'>
                <div className='task-header__content'>
                    <div className='task-header-menu' onClick={handleSidenavOpenClick}>
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
                    <DropdownFilter
                        selectedList = {props.selectedList}
                        toggleListState = {props.toggleListState}
                        editListDetails = {props.editListDetails}
                    />
                    <DropdownList 
                        selectedList = {props.selectedList}
                        setIsEditingList = {props.setIsEditingList} 
                        setIsDeletingList = {props.setIsDeletingList}
                        toggleListState = {props.toggleListState}
                    />
                </div>
            </div>
            {/* {   
                props.isDeletingList 
                ?   <DeleteItemModal 
                        title="Delete list"
                        description={`Are you sure you want to delete the "${props.selectedList.name}" list?`}
                        itemId={props.selectedList.id}
                        deleteItem={props.deleteList}
                        onDelete={onDelete}
                        onCancel={onCancel}
                        isDeleting={props.isDeletingList}
                        setIsDeleting={props.setIsDeletingList}
                    />
                :   null
            } */}
        </div>
    )
};

export default TaskHeader;