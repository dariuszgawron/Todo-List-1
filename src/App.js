import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      <Sidenav systemLists={systemLists} customLists={customLists} tasks={tasks} activeList={activeList} keyword={keyword} />
      <Main lists={customLists} tasks={tasks} activeList={activeList} />
    </>
  );
}

export default App;
