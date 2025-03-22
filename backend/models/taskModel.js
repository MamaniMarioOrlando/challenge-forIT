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

const updateTask = (id, updateData) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if(taskIndex === -1) return null;

    tasks[taskIndex] = { ...tasks[taskIndex], ...updateData};
    return tasks[taskIndex];
};

const deleteTask = (id) =>{
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    return tasks.length !== initialLength;
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}