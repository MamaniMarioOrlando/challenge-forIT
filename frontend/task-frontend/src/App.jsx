import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { Home } from './pages/home';
import { CreateTask } from './pages/CreateTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask])
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/create" element={<CreateTask onTaskCreated ={handleTaskCreated} />} />
      </Routes>
    </Router>
  )
}

export default App
