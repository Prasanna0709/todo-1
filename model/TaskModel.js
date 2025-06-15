const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum: ["low", "medium", "high"],
        default: "medium",
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const TaskModel = new mongoose.model("Tasks",TaskSchema);
module.exports = TaskModel;