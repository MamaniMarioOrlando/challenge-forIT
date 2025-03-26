import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import { Home } from './pages/home';
import { CreateTask } from './pages/CreateTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask])
  };
  const handleDelete = async(taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: 'DELETE',
    });
    if(!response.ok) throw new Error("Error deleting task.");
    setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error("Error: ",error);
    }
  }

  const handleUpdate = async (editedTask) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${editedTask.id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title: editedTask.title,
          description: editedTask.description,
          completed: editedTask.completed || false
        }),
    });
    if(!response.ok) throw new Error("Error updating task.");
    const updateTask = await response.json();
    setTasks(tasks.map(task => task.id === updateTask.id ? updateTask: task));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchTasks = async () => {
      try{
        const response = await fetch('http://localhost:5000/api/tasks');
        if(!response.ok) throw new Error("Error while loading tasks.");
        const data = await response.json();
        setTasks(data);
      }catch(error){
        console.error("Error fetching tasks", error);
      }
    };
    fetchTasks();
  },[]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate} />} />
        <Route path="/create" element={<CreateTask onTaskCreated ={handleTaskCreated} />} />
      </Routes>
    </Router>
  )
}

export default App
