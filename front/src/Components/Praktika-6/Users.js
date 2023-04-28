import React from 'react';
import User from './User';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Users.css';

const url = 'https://jsonplaceholder.typicode.com/users';

function Users() {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };
    useEffect(() => {
        getUsers();
    }, []);

    const [displayForm, setDisplayForm] = useState(false);
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [companyInput, setCompanyInput] = useState('');
    const [editUser, setEditUser] = useState(false);
    const [updateUser, setUpdateUser] = useState({});

    const changeStatus = () => {
        setDisplayForm(!displayForm);
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) =>
            user.id !== id
        ));
    };

    const handleEditUser = (id) => {
        setEditUser(true);
        let findUser = users.find(user => user.id == id);
        setNameInput(findUser.name);
        setEmailInput(findUser.email);
        setCityInput(findUser.address.city);
        setPhoneInput(findUser.phone);
        setCompanyInput(findUser.company.name);
        setUpdateUser(findUser);
    };

    const handleUpdateUser = ({id}) => {
        let newUsersList = users.map((user) => {
            if(user.id == id){
                return { id: uuidv4(), name: nameInput, email: emailInput, address: { city: cityInput }, phone: phoneInput, company: { name: companyInput } };
            }
            return user;
        });
        setUsers(newUsersList);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editUser){
            let newUser = { id: uuidv4(), name: nameInput, email: emailInput, address: { city: cityInput }, phone: phoneInput, company: { name: companyInput } };
            setUsers((oldList) => [...oldList, newUser]);
            setNameInput('');
            setEmailInput('');
            setCityInput('');
            setPhoneInput('');
            setCompanyInput('');
            setDisplayForm(false);
        } else {
            handleUpdateUser(updateUser);
            setNameInput('');
            setEmailInput('');
            setCityInput('');
            setPhoneInput('');
            setCompanyInput('');
            setEditUser(false);
            setDisplayForm(false);
        } 
    };

    let allUsers = users.map((user) => {
        return <User key={uuidv4()} id={user.id} name={user.name} email={user.email} city={user.address.city} phone={user.phone} company={user.company.name} deleteUser={deleteUser} editUser = {handleEditUser} changeStatus = {changeStatus}/>
    });

    return (
        <>
            <button onClick={() => changeStatus()} type="button" className="btn btn-outline-primary mb-2">Add user</button>
            <form onSubmit={handleSubmit} className={displayForm ? "mt-3" : "mt-3 Form"}>
                <label htmlFor="nameInput" className="form-label">Name:</label>
                <input onChange={(e) => setNameInput(e.target.value)} type="text" id="nameInput" name="nameInput" value={nameInput} className="form-control"></input>
                <label htmlFor="emailInput" className="form-label">Email:</label>
                <input onChange={(e) => setEmailInput(e.target.value)} type="text" id="emailInput" name="emailInput" value={emailInput} className="form-control"></input>
                <label htmlFor="cityInput" className="form-label">City:</label>
                <input onChange={(e) => setCityInput(e.target.value)} type="text" id="cityInput" name="cityInput" value={cityInput} className="form-control"></input>
                <label htmlFor="phoneInput" className="form-label">Phone:</label>
                <input onChange={(e) => setPhoneInput(e.target.value)} type="text" id="phoneInput" name="phoneInput" value={phoneInput} className="form-control"></input>
                <label htmlFor="companyInput" className="form-label">Company name:</label>
                <input onChange={(e) => setCompanyInput(e.target.value)} type="text" id="companyInput" name="companyInput" value={companyInput} className="form-control"></input>
                <button onClick={handleSubmit} type="button" className="btn btn-outline-secondary mt-2 mb-2">Submit</button>
            </form>
            <table className="table">
                <thead className="table-secondary">
                    <tr>
                        <th className="col">Name</th>
                        <th className="col">Email</th>
                        <th className="col">City</th>
                        <th className="col">Phone</th>
                        <th className="col">Company name</th>
                        <th className="col">Action</th>
                    </tr>
                </thead>
                <tbody className="table-light">{allUsers}</tbody>
            </table>
        </>
    );
}

export default Users;