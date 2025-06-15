const AppError = require("../../utils/errorUtils/AppError");

const ValidateTask=(req,res,next)=>{
    const {task,description,priority} = req.body;

    if(!task || !description || !priority || priority === "" || description === "" || task === ""){
        return next(new AppError(400 , "fail" , "Please Give the Valid Task Details"));
    }

    next();
}

module.exports = {ValidateTask};