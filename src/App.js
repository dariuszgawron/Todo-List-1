// import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'

import todoApi from './api/todoApi';

import Sidenav from './components/Sidenav/Sidenav';
import Main from './components/Main/Main';
import TaskDetails from './components/TaskDetails/TaskDetails';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [systemLists, setSystemLists] = useState([]);
  const [customLists, setCustomLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activeList, setActiveList] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [selectedList, setSelectedList] = useState(null);

  // Custom lists
  const addCustomList = (listName) => {
    // console.log();
    const newCustomList = {
      id: `list-${nanoid()}`, 
      name: listName, 
      icon: '',
      timeStamp: Date.now()
    };
    const modifiedCustomLists = [...customLists, newCustomList];
    setCustomLists(modifiedCustomLists);
    localStorage.setItem('todo-lists', JSON.stringify(modifiedCustomLists));
  };
  const editCustomList = (listId, listName, listIcon) => {
    const modifiedCustomLists = customLists.map(customList => {
      if(customList.id === listId) {
        return {...customList, name: listName, icon: listIcon};
      }
      return customList;
    });
    setCustomLists(modifiedCustomLists);
    localStorage.setItem('todo-lists', JSON.stringify(modifiedCustomLists));
  };
  const deleteCustomList = listId => {
    const filteredCustomLists = customLists.filter(customList => customList.id !== listId);
    setCustomLists(filteredCustomLists);
    localStorage.setItem('todo-lists', JSON.stringify(filteredCustomLists));
  };
  const toggleList = listId => {
    const selectedList = systemLists.concat(customLists).find(list => list.id === listId);
    setSelectedList(selectedList);
    localStorage.setItem('todo-selectedList', JSON.stringify(selectedList));
  }

  // Tasks
  const addTask = (taskName, taskDate) => {
    const newTask = {
      id: `task-${nanoid()}`, 
      listId: selectedList.id,
      name: taskName, 
      date: taskDate,
      description: '',
      timeStamp: Date.now(),
      favorite: false,
      completed: false
    };
    const modifiedTasks = [...tasks, newTask];
    setTasks(modifiedTasks);
    localStorage.setItem('todo-tasks', JSON.stringify(modifiedTasks));
  };
  const toggleTaskState = id => {
    const modifiedTasks = tasks.map(task => {
      if(task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(modifiedTasks);
    localStorage.setItem('todo-tasks', JSON.stringify(modifiedTasks));
  }
  const editTask = (taskId, taskName, taskDate, taskDescription, favorite, completed) => {
    const modifiedTasks = tasks.map(task => {
      if(task.id===taskId) {
        return {...task, name: taskName, description: taskDescription}
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
    if((selectedTask && (selectedTask.id !== selected.id)) || selectedTask === null) {
      setIsEditingTask(!isEditingTask);
      setSelectedTask(selected);
    } else {
      setSelectedTask(null);
    }
  }

  useEffect(() => {
    const getSystemLists = () => {
      const listsData = todoApi.getSystemLists();
      setSystemLists(listsData);
    }
    const getCustomLists = async () => {
      const listsData = await todoApi.getCustomLists();
      setCustomLists(listsData);
    };
    const getTasks = async () => {
      const tasksData = await todoApi.getCustomTasks();
      setTasks(tasksData);
    };
    
    getSystemLists();
    getCustomLists();
    getTasks();
  }, []);

  useEffect(() => {
    const getSelectedList = async () => {
      const selectedList = await todoApi.getSelectedList();
      if(!selectedList) 
        setSelectedList(systemLists[0]);
      else
        setSelectedList(selectedList);
    };
    getSelectedList();
  }, [systemLists]);

  return (
    <div className='todo-app'>
      <Sidenav 
        systemLists={systemLists} 
        customLists={customLists} 
        tasks={tasks} 
        activeList={activeList} 
        addCustomList={addCustomList} 
        editCustomList={editCustomList}
        deleteCustomList={deleteCustomList}
        keyword={keyword} 
        selectedList={selectedList}
        toggleList={toggleList}
      />
      <Main 
        systemLists={systemLists}
        customLists={customLists} 
        tasks={tasks} 
        activeList={activeList} 
        addTask={addTask} 
        toggleTaskState={toggleTaskState}
        editTask={editTask}
        deleteTask={deleteTask}
        editCustomList={editCustomList}
        deleteCustomList={deleteCustomList}
        toggleTask={toggleTask}
        selectedTask={selectedTask}
      />
      <TaskDetails task={selectedTask} setIsEditingTask={setIsEditingTask} />
    </div>
  );
}

export default App;
