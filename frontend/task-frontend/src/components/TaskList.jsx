import { TaskItem } from './TaskItem';

export const TaskList = ({tasks}) => {
  return (
    <>
        <div className="space-y-9 max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
            <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">List of tasks</h1>
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
