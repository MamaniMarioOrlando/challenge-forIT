import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const TaskForm = ({onTaskCreated}) => {
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/api/tasks",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({title,description}),
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Error task create.")
            }
            return response.json();
        })
        .then((newTask)=> {
            onTaskCreated(newTask);
            setTitle("");
            setDescription("")
            navigate('/')
        })
        .catch(error => console.error(error));
    }
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Create Task</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
        <input 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="text"
            placeholder='Title'
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
         />
         <textarea 
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none h-24 resize-none"
            placeholder='Description'
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
        />
        <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
            type="submit">
                Create
        </button>
    </form>
    </div>
  )
}
