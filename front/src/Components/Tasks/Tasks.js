import React from 'react';
import { useState, useEffect } from 'react';
import Task from '../Task/Task';
import { v4 as uuidv4 } from 'uuid';

const url = 'http://localhost:4000/api/v1/todos';

function Tasks() {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setTasks(data.data.tasks);
    };
    
    useEffect(() => {
        getData();
    }, [tasks]);

    const deleteTaskBackEnd = async (id) =>{
        const remove = await fetch("http://localhost:4000/api/v1/todos/" + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
        });
    };

    const addTaskBackEnd = async (newTask) => {
        const add = await fetch("http://localhost:4000/api/v1/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        });
    };

    const changeStatusBackEnd = async (id) => {
        const change = await fetch("http://localhost:4000/api/v1/todos/" + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                status: true
            }),
        });
    };
    
    const changeStatus = (id) => {
        const updateData = [...tasks];
        updateData.forEach((task) => {
            if(task._id == id){
                task.status = true;
            };
        });
        // setTasks(updateData);
        changeStatusBackEnd(id);
    };

    const deleteTask = (id) => {
        // setTasks(tasks.filter((task) => 
        //     task._id !== id
        // ));
        deleteTaskBackEnd(id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskInput) {
            let newTask = {taskTitle: taskInput, status: false};
            // setTasks((lastData) => [...lastData, newTask]);
            setTaskInput('');
            addTaskBackEnd(newTask);
        };
    };

    let AllTasks = tasks.map((task) => {
        return (
            <Task key = {task._id || uuidv4()} id = {task._id} taskTitle = {task.taskTitle} status = {task.status} changeStatus = {changeStatus} deleteTask = {deleteTask}/>
        );
    });

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange = {(e) => setTaskInput(e.target.value)} type="text" id = "taskInput" name = "taskInput" value = {taskInput} className="form-control m-2" placeholder="Add new task"></input>
        </form>
        {AllTasks.length == 0 ? <p className="m-2">Tasks list is empty!</p> : ""}
        {AllTasks}
    </div>
  );
}

export default Tasks;