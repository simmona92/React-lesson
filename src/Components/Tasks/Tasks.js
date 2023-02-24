import React from 'react'
import Task from '../Task/Task';
import { v4 as uuidv4 } from 'uuid';

function Tasks() {
    let allTasks = [
        {
            taskTitle: "Make a cake",
            status: false
        },
        {
            taskTitle: "No alcohol today",
            status: false
        }
    ];
    let tasks = allTasks.map((task) => {
        return (
            <Task key = {uuidv4()} taskTitle = {task.taskTitle} />
        );
    });
  return (
    <div>
        {tasks}
    </div>
  );
}

export default Tasks;