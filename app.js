const express =  require("express");
const app = express();
const ErrorHandler = require("./middleware/ErrorHandler");
const TodoRoutes = require("./route/TodoRoute");
require("dotenv").config();

//neccesary middlewares
app.use(express.json())

//Database connection :-
require("./database");

//Routes:-
app.use("/api/todo",TodoRoutes);

//Error handler middleware
app.use(ErrorHandler);


module.exports = app;