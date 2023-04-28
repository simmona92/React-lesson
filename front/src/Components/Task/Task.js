import React from 'react'
import Tasks from '../Tasks/Tasks';
import {FaCheck, FaChevronRight} from "react-icons/fa";

function Task(props) {
    let {id, taskTitle, status, changeStatus, deleteTask} = props;
  return (
    <div className="d-flex">
        <div className="p-2 flex-grow-1">
            <div className= {status? "alert alert-success":"alert alert-dark"}  role="alert">{status? <FaCheck/>:<FaChevronRight/>} {taskTitle}</div>
        </div>
        <div onClick = {() => changeStatus(id)} className="p-2"><button type="button" className="btn btn-secondary mt-2">{status? "Done":"Check"}</button></div>
        <div onClick = {() => deleteTask(id)} className="p-2"><button type="button" className="btn btn-warning mt-2">Delete</button></div>
    </div>
  )
}

export default Task;