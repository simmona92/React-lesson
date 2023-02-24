import React from 'react'
import Tasks from '../Tasks/Tasks'

function Task(props) {
    let {taskTitle, status} = props;
  return (
    <div class="d-flex">
        <div class="p-2 flex-grow-1">
            <div class="alert alert-dark" role="alert">{taskTitle}</div>
        </div>
        <div class="p-2"><button type="button" class="btn btn-secondary">Check</button></div>
        <div class="p-2"><button type="button" class="btn btn-secondary">Delete</button></div>
    </div>
  )
}

export default Task