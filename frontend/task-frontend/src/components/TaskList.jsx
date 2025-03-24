import { useEffect, useState } from 'react'
import { TaskItem } from './TaskItem';

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/tasks')
            .then(response => {
                if(!response.ok){
                    throw new error('Error in obtaining tasks.')
                }
                return response.json();
            })
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    },[])
  return (
    <>
        <div className="space-y-9 max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Lista de tareas</h1>
            <div className="space-y-3">
            {
                tasks.length > 0 ? (
                    tasks.map((task) => 
                    <TaskItem key={task.id} task={task}/>
                )) : (<p className="text-center text-red-500 text-2xl">No tasks are available.</p> )
            }
            </div>
        </div>
    </>
  )
}
