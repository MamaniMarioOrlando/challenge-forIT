import { Link } from 'react-router-dom'
import { TaskList } from '../components/TaskList'

export const Home = ({tasks, onDelete, onUpdate}) => {
  return (
    <div className="relative pb-20 min-h-screen"> 
      <TaskList tasks={tasks} onDelete={onDelete} onUpdate={onUpdate} />
      <Link
        to="/create"
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-105 z-10"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </Link>
    </div>
  )
}
