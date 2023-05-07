import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Register.css";

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [authError, setAuthError] = useState('');

    const registerUser =  async (e) => {
        e.preventDefault();
        if(password !== repeatPassword){
            setAuthError("Passwords do not match!")
        } else {
            await fetch('http://localhost:4000/api/v1/auth/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-type': 'application/json'
                }, 
            })
        } 
    };

return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h5 className="navbar-brand" href="#">Navbar</h5>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button onClick={() => navigate('/')} className='nav-link'>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className='Container'>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
            <input onChange={(e) => setUsername(e.target.value)} placeholder='username' type='text' className="form-control mb-3" value = {username}></input>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" className={authError ? "form-control mb-3 border-danger":"form-control mb-3"} value={password}></input>
            <input onChange={(e) => setRepeatPassword(e.target.value)} placeholder='repeat password' type="password" className={authError ? "form-control mb-3 border-danger":"form-control mb-3"} value={repeatPassword}></input>
            {authError && <div className='text-danger mb-2'>{authError}</div>}
            <button onClick={registerUser} type="button" className="btn btn-primary">Register</button>
        </form>
    </div>
    </>
  )
}

export default Register;