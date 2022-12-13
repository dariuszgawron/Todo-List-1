export const sortOptions = [{
        id: 'alphabeticallyASC',
        title: 'Name: A-Z',
        icon: 'fa-solid fa-arrow-down-a-z',
        value: (firstTask, secondTask) => (firstTask.name).localeCompare(secondTask.name),
    }, {
        id: 'alphabeticallyDESC',
        title: 'Name: Z-A',
        icon: 'fa-solid fa-arrow-up-a-z',
        value: (firstTask, secondTask) => -1 * (firstTask.name).localeCompare(secondTask.name),
    }, {
        id: 'creationDateASC',
        title: 'Creation date: latest',
        icon: 'fa-solid fa-arrow-down-1-9',
        value: (firstTask, secondTask) => new Date(firstTask.date) - new Date(secondTask.date)
    }, {
        id: 'creationDateDESC',
        title: 'Creation date: oldest',
        icon: 'fa-solid fa-arrow-up-1-9',
        value: (firstTask, secondTask) => new Date(secondTask.date) - new Date(firstTask.date)
    }, {
        id: 'importanceASC',
        title: 'Importance: most important',
        icon: 'fa-solid fa-arrow-down-short-wide',
        value: (firstTask, secondTask) => 
            (firstTask.favorite === secondTask.favorite) 
            ?   0
            :   (firstTask.favorite)
                ?   -1
                :   1
    }, {
        id: 'importanceDESC',
        title: 'Importance: least important',
        icon: 'fa-solid fa-arrow-up-short-wide',
        value: (firstTask, secondTask) => 
            (firstTask.favorite === secondTask.favorite) 
            ?   0
            :   (firstTask.favorite)
                ?   1
                :   -1
    }
]

export const systemLists = [
    {
        id: 'system_all',
        name: 'Tasks',
        icon: 'fa-solid fa-house-chimney',
        filter: () => true,
        sort: sortOptions[0].id,
        showCompletedTask: false,
        default: true
    },
    {
        id: 'system_important',
        name: 'Important',
        icon: 'fa-regular fa-star',
        filter: (task) => task.favorite,
        sort: sortOptions[0].id,
        showCompletedTask: false,
        default: false
    },
    {
        id: 'system_planned',
        name: 'Planned',
        icon: 'fa-regular fa-calendar-check',
        filter: (task) => task.date,
        // sort: (firstTask, secondTask) => secondTask.date - firstTask.date,
        sort: sortOptions[2].id,
        showCompletedTask: false,
        default: false
    }
];