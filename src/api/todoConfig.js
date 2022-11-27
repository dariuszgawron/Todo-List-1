export const systemLists = [
    {
        id: 'system_all',
        name: 'Tasks',
        icon: 'fa-solid fa-list',
        filter: () => true,
        sort: (firstTask, secondTask) => (firstTask.name).localeCompare(secondTask.name),
        default: true
    },
    {
        id: 'system_important',
        name: 'Important',
        icon: 'fa-regular fa-star',
        filter: (task) => task.favorite,
        sort: (firstTask, secondTask) => (firstTask.name).localeCompare(secondTask.name),
        default: false
    },
    {
        id: 'system_planned',
        name: 'Planned',
        icon: 'fa-regular fa-calendar-check',
        filter: (task) => task.date,
        sort: (firstTask, secondTask) => secondTask.date - firstTask.date,
        default: false
    }
];