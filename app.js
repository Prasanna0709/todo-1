const express =  require("express");
const app = express();
const cors = require("cors");
const ErrorHandler = require("./middleware/ErrorHandler");
const TodoRoutes = require("./route/TodoRoute");
require("dotenv").config();

//neccesary middlewares
app.use(express.json())

//cors middleware
app.use(cors());

//normal url:
app.get("/hello",(req,res)=>{res.send("Hello bro !")});

//Database connection :-
require("./database");

//Routes:-
app.use("/api/todo",TodoRoutes);

//Error handler middleware
app.use(ErrorHandler);


module.exports = app;