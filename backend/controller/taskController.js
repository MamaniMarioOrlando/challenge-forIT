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
    const taskId = req.param.id;
    const udpdateData = req.body;
    const updateTask = taskModel.updateTask(taskId, udpdateData);
    if(!updateTask){
        return res.status(404).json({error:'Task not found'});
    }
    res.json(updateTask);
};
const deleteTask = (req, res) =>{
    const taskId = req.param.id;
    taskModel.deleteTask(taskId);
    res.status(204).semd();
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}