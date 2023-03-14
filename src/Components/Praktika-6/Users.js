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

    const changeStatus = () => {
        setDisplayForm(!displayForm);
    };

    const deleteUser = (id) => {
        setUsers(users.filter((user) =>
            user.id !== id
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUser = { id: uuidv4(), name: nameInput, email: emailInput, address: { city: cityInput }, phone: phoneInput, company: { name: companyInput } };
        setUsers((oldList) => [...oldList, newUser]);
        setNameInput('');
        setEmailInput('');
        setCityInput('');
        setPhoneInput('');
        setCompanyInput('');
        console.log(newUser);
    }

    let allUsers = users.map((user) => {
        return <User key={uuidv4()} id={user.id} name={user.name} email={user.email} city={user.address.city} phone={user.phone} company={user.company.name} deleteUser={deleteUser} />
    });

    return (
        <>
            <button onClick={() => changeStatus()} type="button" class="btn btn-outline-primary m-2">Add user</button>
            <form onSubmit={handleSubmit} className={displayForm ? "mt-3" : "mt-3 Form"}>
                <label htmlFor="nameInput" class="form-label">Name:</label>
                <input onChange={(e) => setNameInput(e.target.value)} type="text" id="nameInput" name="nameInput" value={nameInput} class="form-control"></input>
                <label htmlFor="emailInput" class="form-label">Email:</label>
                <input onChange={(e) => setEmailInput(e.target.value)} type="text" id="emailInput" name="emailInput" value={emailInput} class="form-control"></input>
                <label htmlFor="cityInput" class="form-label">City:</label>
                <input onChange={(e) => setCityInput(e.target.value)} type="text" id="cityInput" name="cityInput" value={cityInput} class="form-control"></input>
                <label htmlFor="phoneInput" class="form-label">Phone:</label>
                <input onChange={(e) => setPhoneInput(e.target.value)} type="text" id="phoneInput" name="phoneInput" value={phoneInput} class="form-control"></input>
                <label htmlFor="companyInput" class="form-label">Company name:</label>
                <input onChange={(e) => setCompanyInput(e.target.value)} type="text" id="companyInput" name="companyInput" value={companyInput} class="form-control"></input>
                <button onClick={handleSubmit} type="button" class="btn btn-outline-secondary mt-2">Submit</button>
            </form>
            <table class="table">
                <thead class="table-secondary">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Company name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody class="table-light">{allUsers}</tbody>
            </table>
        </>
    );
}

export default Users;