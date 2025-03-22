let tasks = [];

const getAllTasks = ()=>{
    return tasks;
}

const createTask = (title, description)=>{
    const newTask = {
        id: Date.now().toString(),
        title,
        description,
        completed: false,
        created: new Date()
    };

    tasks.push(newTask);
    return newTask;
};

const updateTask = (id, udpdateData) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if(taskIndex === -1) return null;

    tasks[taskIndex] = { ...tasks, ...udpdateData};
    return tasks[taskIndex];
};

const deleteTask = (id) =>{
    tasks = tasks.filter(tasks => task.id !== id);
    return true;
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}