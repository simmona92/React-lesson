import React, { useState } from 'react';
import "./Register.css";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const registerUser =  async (e) => {
        e.preventDefault();
        await fetch('http://localhost:4000/api/v1/auth/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-type': 'application/json'
            }, 
        })
    };

return (
    <div className='Container'>
        <form onSubmit={registerUser}>
            <input onChange={(e) => setUsername(e.target.value)} placeholder='username' type='text' className="form-control mb-3" value = {username}></input>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" className="form-control mb-3" value={password}></input>
            <button onClick={registerUser} type="button" className="btn btn-primary">Register</button>
        </form>
    </div>
  )
}

export default Register;