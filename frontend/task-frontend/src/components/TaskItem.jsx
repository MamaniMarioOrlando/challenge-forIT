import { useState } from "react";

export const TaskItem = ({task, onDelete, onUpdate}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({...task});

  const handleSave = () => {
    onUpdate({
      ...editedTask,
      completed: task.completed
    });
    setIsEditing(false);
  };

  return (
    
        <div className="p-4 bg-gray-100 rounded-xl shadow-sm flex justify-between items-center">
          {isEditing ? (
            <div className="w-full space-y-3">
              <input 
                className="w-full px-3 py-2 border rounded-lg"
                value={editedTask.title}
                onChange={(e)=>{ setEditedTask({...editedTask, title: e.target.value})}}
              />
              <textarea 
                className="w-full px-3 py-2 border rounded-lg"
                value={editedTask.description}
                onChange={(e) => setEditedTask({...editedTask, description:e.target.value})}
              />
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg"
                  onClick={handleSave}
                >
                  save
                </button>
              </div>
            </div>
          ) : (

            <>
            <div className="grid gap-y-2">
            <h2 className="text-lg font-semibold text-gray-900">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        task.completed
                            ? "bg-green-200 text-green-700"
                            : "bg-yellow-200 text-yellow-700"
                    }`}>{task.completed ? "completed" : "incomplete"}</span>
            </div>
            <div className="flex gap-2">
        <button 
          onClick={() => setIsEditing(true)} 
          className="p-2 text-blue-500 hover:text-blue-700 transition-colors"
          aria-label="Editar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
        <button 
          onClick={() => onDelete(task.id)} 
          className="p-2 text-red-500 hover:text-red-700 transition-colors"
          aria-label="Eliminar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
      </>
       )}
        </div>
  );
 
};
