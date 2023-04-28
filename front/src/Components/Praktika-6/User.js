import React from 'react';
import Users from './Users';

function user(props) {
    let {id, name, email, city, phone, company, deleteUser, editUser, changeStatus} = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{city}</td>
      <td>{phone}</td>
      <td>{company}</td>
      <td className= " d-flex flex-row gap-1">
            <a onClick={() => {
              editUser(id);
              changeStatus();
              }} className="btn btn-outline-info opacity-75 btn-sm text-dark" href="#" role="button">Edit</a>
            <a onClick={() => deleteUser(id)} className="btn btn-outline-info opacity-75 btn-sm text-dark" href="#" role="button">Delete</a>
        </td>
    </tr>
  )
};

export default user;