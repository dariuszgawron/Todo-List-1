// import logo from './logo.svg';
import './App.css';
import { useEffect, useId, useState } from 'react';

import todoApi from './api/todoApi';

import Sidenav from './components/Sidenav/Sidenav';
import Main from './components/Main/Main';

function App() {
  const [systemLists, setSystemLists] = useState([]);
  const [customLists, setCustomLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activeList, setActiveList] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState('');

  const addCustomList = (listName) => {
    const newCustomList = {
      id: useId, 
      name: listName, 
      icon: '',
      timeStamp: Date.now()
    };
    const modifiedCustomLists = [...customLists, newCustomList];
    setCustomLists(modifiedCustomLists);
    localStorage.setItem('todo-lists', JSON.stringify(modifiedCustomLists));
  };

  const editCustomList = (listId, listName) => {
    const modifiedCustomLists = customLists.map(customList => {
      if(customList.id === listId) {
        return {...customList, name: listName};
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

  const addTask = (taskName) => {
    const newTask = {
      id: useId, 
      name: taskName, 
      date: '',
      description: '',
      timeStamp: Date.now(),
      favorite: false,
      completed: false
    };
    const modifiedTasks = [...tasks, newTask];
    setTasks(modifiedTasks);
    localStorage.setItem('todo-tasks',JSON.stringify(modifiedTasks));
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

  return (
    <>
      <Sidenav 
        systemLists={systemLists} 
        customLists={customLists} 
        tasks={tasks} 
        activeList={activeList} 
        addCustomList={addCustomList} 
        editCustomList={editCustomList}
        deleteCustomList={deleteCustomList}
        keyword={keyword} 
      />
      <Main 
        lists={customLists} 
        tasks={tasks} 
        activeList={activeList} 
        addTask={addTask} 
        toggleTaskState={toggleTaskState}
        editTask={editTask}
        deleteTask={deleteTask}
        editCustomList={editCustomList}
        deleteCustomList={deleteCustomList}
      />
    </>
  );
}

export default App;
