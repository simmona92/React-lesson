import React from 'react';
import { useState } from 'react';
import Task from '../Task/Task';
import { v4 as uuidv4 } from 'uuid';

let data = [
    {
        id: 1,
        taskTitle: "Make a cake",
        status: false
    },
    {
        id: 2,
        taskTitle: "No alcohol today",
        status: false
    },
    {
        id: 3,
        taskTitle: "Wear shirt that says 'LIFE'",
        status: false
    },
    {
        id: 4,
        taskTitle: "Sleep",
        status: false
    },
    {
        id: 5,
        taskTitle: "Make TODO list",
        status: false
    },
    {
        id: 6,
        taskTitle: "Look at list",
        status: false
    },
    {
        id: 7,
        taskTitle: "PANIC!",
        status: false
    }
];
function Tasks() {
    const [tasks, setTasks] = useState(data);
    
    const changeStatus = (id) => {
        const updateData = [...data];
        updateData.forEach((task) => {
            if(task.id == id){
                task.status = true;
            };
        });
        setTasks(updateData);
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => 
            task.id !== id
        ));
    }
    let AllTasks = tasks.map((task) => {
        return (
            <Task id = {task.id} taskTitle = {task.taskTitle} status = {task.status} changeStatus = {changeStatus} deleteTask = {deleteTask}/>
        );
    });
  return (
    <div>
        {AllTasks}
    </div>
  );
}

export default Tasks;