// import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'

import todoApi from './api/todoApi';
import { sortOptions } from './api/todoConfig';

import Sidenav from './components/Sidenav/Sidenav';
import Main from './components/Main/Main';
import TaskDetails from './components/TaskDetails/TaskDetails';
import DeleteItemModal from './components/DeleteItemModal/DeleteItemModal';
import EditListModal from './components/EditListModal/EditListModal';
// import TaskList from './components/TaskList/TaskList';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [selectedListId, setSelectedListId] = useState(null);
  const [isEditingList, setIsEditingList] = useState(false);
  const [isDeletingList, setIsDeletingList] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);
  // const [showDetails, setShowDetails] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState('');

  // Custom lists
  const addList = (listName) => {
    const newList = {
      id: `list-${nanoid()}`, 
      name: createListTitle(lists, listName), 
      icon: 'fa-solid fa-list',
      filter: null,
      // sort: (firstTask, secondTask) => (firstTask.name).localeCompare(secondTask.name),
      sort: sortOptions[0].id,
      showCompletedTask: false,
      timeStamp: Date.now()
    };
    const modifiedLists = [...lists, newList];
    setLists(modifiedLists);
    localStorage.setItem('todo-lists', JSON.stringify(modifiedLists));
  };
  const editList = (listId, listName, listIcon) => {
    const modifiedLists = lists.map(list => {
      if(list.id === listId) {
        return {...list, name: listName, icon: listIcon};
      }
      return list;
    });
    setLists(modifiedLists);
    localStorage.setItem('todo-lists', JSON.stringify(modifiedLists));
    if(selectedList.id === listId) {
      const selected = modifiedLists.find(list => list.id === listId);
      setSelectedList(selected);
      localStorage.setItem('todo-selectedList', JSON.stringify(selected))
    }
  };
  const deleteList = listId => {
    const filteredLists = lists.filter(list => list.id !== listId);
    const filteredTasks = tasks.filter(task => task.listId !== listId);
    setTasks(filteredTasks);
    setLists(filteredLists);
    setSelectedList(lists[0]);
    setSelectedListId(lists[0].id);
    localStorage.setItem('todo-tasks', JSON.stringify(filteredTasks));
    localStorage.setItem('todo-lists', JSON.stringify(filteredLists));
    localStorage.setItem('todo-selectedList', JSON.stringify(lists[0]));
  };
  const toggleList = listId => {
    const selectedList = lists.find(list => list.id === listId);
    setSelectedList(selectedList);
    setSelectedListId(selectedList.id);
    localStorage.setItem('todo-selectedList', JSON.stringify(selectedList));
    setSelectedTaskId(null);
    setIsEditingTask(false);
    setIsDeletingTask(false);
  }
  const toggleListState = (listId, property) => {
    const modifiedLists = lists.map(list => {
      if(list.id === listId) {
        return {...list, [property]: !list[property]}
      }
      return list;
    });
    setLists(modifiedLists);
    localStorage.setItem('todo-lists', JSON.stringify(modifiedLists));
  }
  const createListTitle = (lists, listName) => {
    let availableTitle = listName;
    let exist = lists.map(list => list.name).indexOf(availableTitle);
    let index = 1;
    while(exist!==-1) {
      availableTitle = `${listName} (${index++})`;
      exist = lists.map(list => list.name).indexOf(availableTitle);
    }
    return availableTitle;
  }

  // Tasks
  const addTask = (taskName, taskDate = '', taskRemind = '', taskRepeat = '') => {
    const currentList = 
      (lists.find(list => (list.system && list.id === selectedList.id))!==undefined)
      ? lists[0]
      : selectedList;

    const newTask = {
      id: `task-${nanoid()}`, 
      listId: currentList.id,
      name: taskName, 
      date: taskDate,
      remind: taskRemind,
      repeat: taskRepeat,
      description: '',
      timeStamp: Date.now(),
      favorite: false,
      completed: false
    };
    const modifiedTasks = [...tasks, newTask];
    setTasks(modifiedTasks);
    localStorage.setItem('todo-tasks', JSON.stringify(modifiedTasks));
  };
  const toggleTaskState = (taskId, property='completed') => {
    const modifiedTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {...task, [property]: !task[property]}
      }
      return task;
    });
    setTasks(modifiedTasks);
    localStorage.setItem('todo-tasks', JSON.stringify(modifiedTasks));
  }
  const editTask = (taskId, property, value) => {
    const modifiedTasks = tasks.map(task => {
      if(task.id===taskId) {
        return {...task, [property]: value}
      }
      return task;
    });
    setTasks(modifiedTasks);
    localStorage.setItem('todo-tasks', JSON.stringify(modifiedTasks));
  };
  const deleteTask = taskId => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
    localStorage.setItem('todo-tasks', JSON.stringify(filteredTasks));
  };
  const toggleTask = taskId => {
    const selected = tasks.find(task => task.id === taskId);
    if((selectedTaskId && (selectedTaskId !== selected.id)) || selectedTaskId === null) {
      setIsEditingTask(true);
      setSelectedTaskId(selected.id);
      setIsDeletingTask(false);
    } else {
      setIsEditingTask(false);
      setSelectedTaskId(null);
      setIsDeletingTask(false);
    }
  }

  const onDeleteList = () => {
    setIsEditingTask(false);
    setIsDeletingList(false);
  }

  const onCancelList = () => {
    setIsDeletingList(false);
  }

  useEffect(() => {
    const getLists = () => {
      setLists(todoApi.getLists());
    }
    const getTasks = async () => {
      setTasks(await todoApi.getTasks());
    };
    
    getLists();
    getTasks();
  }, []);

  useEffect(() => {
    const getSelectedList = () => {
      const selected = todoApi.getSelectedList();
      if(!selected) {
        setSelectedList(lists[0]);
        setSelectedListId(lists[0].id);
      } else {
        setSelectedList(selected);
        setSelectedListId(selected.id);
      }
    };
    if(lists.length > 0) {
      getSelectedList();
      setIsLoading(false);
    }
  }, [lists]);

  useEffect(() => {
    const activeList = selectedListId !== null
      ? lists.find(list => list.id === selectedListId)
      : undefined;
    console.log(activeList);
    (activeList !== undefined)
      ? setSelectedList(activeList)
      : setSelectedList(null);
    const activeTask = selectedTaskId !== null 
      ? tasks.find(task => task.id === selectedTaskId) 
      : undefined;
    (activeTask !== undefined)
      ? setSelectedTask(activeTask)
      : setSelectedTask(null);
  }, [lists, selectedListId, tasks, selectedTaskId]);

  return (
    <div className='todo-app'>
    { 
      !isLoading && selectedList
      ? <>
          <Sidenav 
            lists={lists}
            addCustomList={addList} 
            editCustomList={editList}
            deleteCustomList={deleteList}
            selectedList={selectedList}
            toggleList={toggleList}
            tasks={tasks} 
            keyword={keyword} 
            setKeyword={setKeyword}
          />
          <Main 
            lists={lists}
            // systemLists={systemLists}
            selectedList={selectedList}
            editCustomList={editList}
            isEditingList={isEditingList}
            setIsEditingList={setIsEditingList}
            deleteCustomList={deleteList}
            isDeletingList={isDeletingList}
            setIsDeletingList={setIsDeletingList}
            toggleListState={toggleListState}
            tasks={tasks}  
            selectedTask={selectedTask}
            toggleTask={toggleTask}
            addTask={addTask} 
            editTask={editTask}
            toggleTaskState={toggleTaskState}
            deleteTask={deleteTask}
            keyword={keyword}
          />
          {isEditingTask && selectedTask!==null &&
            <TaskDetails 
              task={selectedTask} 
              list={lists.find(list => list.id === selectedTask.listId)}
              editTask={editTask}
              isEditingTask={isEditingTask}
              setIsEditingTask={setIsEditingTask}
              deleteTask={deleteTask}
              isDeletingTask={isDeletingTask}
              setIsDeletingTask={setIsDeletingTask}
              setSelectedTask={setSelectedTask}
              toggleTaskState={toggleTaskState}
            />
          } 
          {   
            isDeletingList &&
            <DeleteItemModal 
              title="Delete list"
              description={`Are you sure you want to delete the "${selectedList.name}" list along with all related tasks?`}
              itemId={selectedList.id}
              deleteItem={deleteList}
              isDeleting={isDeletingList}
              setIsDeleting={setIsDeletingList}
              onDelete={onDeleteList}
              onCancel={onCancelList}
            />
          }
          {
            isEditingList && 
            <EditListModal 
              title="Edit list"
              list={selectedList}
              editList={editList}
              isEditing={isEditingList} 
              setIsEditingList={setIsEditingList}
            />
          }
        </>
      : ''
    }
    </div>
  );
}

export default App;
