import { Link } from 'react-router-dom';
import { TaskItem } from './TaskItem';

export const TaskList = ({tasks, onDelete, onUpdate}) => {
  return (
    <div className="space-y-9 max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        List of tasks
      </h1>
      
      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem 
              key={task.id} 
              task={task}
              onDelete={onDelete}
              onUpdate={onUpdate}  
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-red-500 text-2xl mb-4">No tasks available</p>
            <Link
              to="/create"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Create your first task
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
