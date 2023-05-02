const express = require("express");
const app = express();

const todoRouter = require("./routes/todoRoutes");
const usersRouter = require("./routes/usersRoutes");

app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
 next(); 
});

// middleware - decode JSON data for POST, PUT, PATCH
app.use(express.json());

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/register", usersRouter);
app.use("/api/v1/login", usersRouter);

module.exports = app;



