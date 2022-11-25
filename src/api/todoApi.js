import { systemLists } from './todoConfig';

const todoApi = {
    getSystemLists: () => {
        return systemLists;
    },
    getCustomLists: () => {
        return JSON.parse(localStorage.getItem('todo-lists')) || [];
    },
    getCustomTasks: () => {
        return JSON.parse(localStorage.getItem('todo-tasks')) || [];
    },
    getSelectedList: () => {
        return JSON.parse(localStorage.getItem('todo-selectedList')) || null;
    }
}

export default todoApi;