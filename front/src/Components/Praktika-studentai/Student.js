import React from 'react';
import Students from './Students';
import {RiEdit2Fill, RiDeleteBin5Fill} from 'react-icons/ri';

function Student(props) {
    let {id, name, surname, birthYear, city, program, group, deleteStudent, handleEditStudent} = props;
  return (
    <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{birthYear}</td>
        <td>{city}</td>
        <td>{program}</td>
        <td>{group}</td>
        <td className= " d-flex flex-row gap-1">
            <a onClick={() => handleEditStudent(id)} className="btn btn-warning btn-sm" href="#" role="button"><RiEdit2Fill/></a>
            <a onClick = {() => deleteStudent(id)} className="btn btn-danger btn-sm text-dark" href="#" role="button"><RiDeleteBin5Fill/></a>
        </td>
    </tr>
  )
}

export default Student;