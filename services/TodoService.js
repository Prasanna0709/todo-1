const Task = require("../model/TaskModel");
const AppError = require("../utils/errorUtils/AppError");

const createTask = async(task,description,priority) =>{
    try{
        const newTask = await Task.create({
            task,
            description,
            priority
        });

        return newTask;
    }catch(err){
        throw new AppError(500, 'error', 'Something went wrong while creating task');
    }
}   

const removeTask = async (id) =>{
    try{
        const deletedTask = await Task.findByIdAndDelete(id);
        return deletedTask;
    }catch(err){
        throw new AppError(500, "fail" , "failed in Deleting the task !");
    }   
}

const getAllTasks = async ()=>{
    try{
        const datas = await Task.find();
        return datas;
    }catch(err){
        throw new AppError(500, "fail" , "Something went wrong in fetching all the Tasks !");
    }
}

const updateTask = async (id,task,description,priority)=>{
    try{
        const existingTask = await Task.findById(id);

        if(existingTask === null || !existingTask){
            throw new AppError(400 , "fail" ,"Give the Valid Task !");
        }

        existingTask.task = task ? task : existingTask.task;
        existingTask.description = description ? description : existingTask.description;
        existingTask.priority = priority ? priority : existingTask.priority;

        await existingTask.save();
        return existingTask;
    }catch(err){
        throw new AppError(500, "fail" ,"Something Wenty wrong in Updating the Task!");
    }
}

module.exports = {createTask,removeTask,getAllTasks,updateTask};