const express = require("express");
const app = express();
const cors = require('cors');

const todoRouter = require("./routes/todoRoutes");
const usersRouter = require("./routes/usersRoutes");
const logoutRouter = require("./routes/logoutRoute");

app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
 next(); 
});

// middleware - decode JSON data for POST, PUT, PATCH
app.use(express.json());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/auth", usersRouter);
app.use("/api/v1/logout", logoutRouter);

module.exports = app;



