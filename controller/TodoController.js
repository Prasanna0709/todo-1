const {createTask,removeTask,getAllTasks,updateTask,updateStatus} = require("../services/TodoService");
const AppError = require("../utils/errorUtils/AppError");

const addTask = async (req,res,next) =>{
    try{
        const {task , description , priority} = req.body;

        const response = await createTask(task,description,priority);

        return res.status(201).json({status:"✅ Success",message:"Task Added Successfully",data:response});
    }catch(err){
        next(err);
    }
}

const deleteTask = async (req,res,next) =>{
    try{
        const taskId = await req.params.id;

        if(taskId==null || taskId===""){
            return next(new AppError(400 , "fail" , "Give the Valid Task to Delete !"));
        }

        const result = await removeTask(taskId);
        return res.status(200).json({status:"✅ Success !",message:"Task Deleted Successfully !",data:result});
    }catch(err){
        next(err);
    }
}

const alltasks = async (req,res,next) =>{
    try{
        const result = await getAllTasks();
        return res.status(200).json({status:"✅ Success",message:"All Tasks are Fetched !",data:result});
    }catch(err){
        next(err);
    }
}

const editTask = async (req,res,next)=>{
    try{
        const {id,task,description,priority} = req.body;

    if(!id || id.trim() === ""){
        return next(new AppError(400,"fail", "Please Give the Valid Credentials !"));
    }
    
    const result = await updateTask(id,task,description,priority);
    if(result == null){
        return new AppError(500, "fail" ,"Something Went wrong in Updating the Task !");
    }

    return res.status(200).json({status:"✅ Success",message:"Given Task is Updated !",data:result});
    }catch(err){
        next(err);
    }
}

const editStatus = async (req,res,next) => {
    const {id,completed} = req.body;
    console.log(id,completed);
    
    if(!id){
        return next(new AppError(400 , "fail" , "Please select the Valid task !"));
    }

    
    const result = await updateStatus(id,completed);
    if(!result){
        return next(new AppError(500 , "fail" , "Something went wrong in updating the status !"));
    }

    return res.status(200).json({status:"✅ Success",message:"Task Status is updated",data:result});
}

module.exports = {addTask,deleteTask,alltasks,editTask,editStatus};