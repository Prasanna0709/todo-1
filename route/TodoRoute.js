const express = require("express");
const router = express.Router();
const {ValidateTask} = require("../middleware/vaidationMiddleware/ValidateTask")
const {addTask,deleteTask,alltasks,editTask} = require("../controller/TodoController")

router.post("/add-task",ValidateTask,addTask);
router.delete("/delete-task/:id",deleteTask);
router.get("/get-allTasks",alltasks);
router.put("/edit-task",editTask);

module.exports = router;