import { systemLists } from './todoConfig';

const todoApi = {
    getSystemLists: () => {
        return systemLists;
    },
    getCustomLists: () => {
        return JSON.parse(localStorage.getItem('todo-lists')) || [];
    },
    getLists: () => {
        const localLists = JSON.parse(localStorage.getItem('todo-lists')) || [];
        let totalLists = [];
        systemLists.forEach((list => {
            const matchingList = localLists.find(localList => localList.id === list.id);
            if(matchingList && 'filter' in matchingList && 'sort' in matchingList && 'showCompletedTask' in matchingList) {
                totalLists.push({
                    id: list.id,
                    name: list.name,
                    icon: list.icon,
                    filter: matchingList.filter,
                    sort: matchingList.sort,
                    showCompletedTask: matchingList.showCompletedTask,
                    system: true
                });
            } else {
                totalLists.push({...list, system: true})
            }
        }));
        const localCustomLists = localLists
            .filter(list => (!list.system))
            .map(list => ({ ...list, system: false}));
        if(localCustomLists.length > 0) {
            totalLists = [...totalLists, ...localCustomLists];
        }
        return totalLists;
    },
    getTasks: () => {
        return JSON.parse(localStorage.getItem('todo-tasks')) || [];
    },
    getSelectedList: () => {
        return JSON.parse(localStorage.getItem('todo-selectedList')) || null;
    }
}

export default todoApi;