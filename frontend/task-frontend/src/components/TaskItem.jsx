export const TaskItem = ({task}) => {
  return (
    <>
        <div className="p-4 bg-gray-100 rounded-xl shadow-sm flex justify-between items-center"> 
            <div className="grid gap-y-2">
            <h2 className="text-lg font-semibold text-gray-900">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        task.completed
                            ? "bg-green-200 text-green-700"
                            : "bg-yellow-200 text-yellow-700"
                    }`}>{task.completed ? "completed" : "incomplete"}</span>
            </div>
        </div>
    </>
  )
}
