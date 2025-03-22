const taskModel = require("../models/taskModel");

const getAllTasks = (req, res) => {
    const tasks = taskModel.getAllTasks(); 
    res.json(tasks);
};

const createTask = (req, res) => {
    const {title, description} = req.body;
    const newTask = taskModel.createTask(title, description);
    res.status(201).json(newTask);
}

const updateTask = (req, res) => {
    const taskId = req.params.id;
    const udpdateData = req.body;
    const updateTask = taskModel.updateTask(taskId, udpdateData);
    if(!updateTask){
        return res.status(404).json({error:'Task not found'});
    }
    res.json(updateTask);
};
const deleteTask = (req, res) =>{
    const taskId = req.params.id;
    const isDeleted = taskModel.deleteTask(taskId);

    if(!isDeleted){
        return res.status(404).json({error: 'task not found'});
    }
    res.status(200).json({ message: 'The task was successfully deleted' });
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}