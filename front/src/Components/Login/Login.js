import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

   
   const loginUser = async (e) => {
    e.preventDefault();
      await fetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
          'Content-type': 'application/json'
      },
        credentials: 'include'
    }).then((response)=> {
      //console.log(response)
      if(response.ok){
        navigate("/Home")
      } else {
        setAuthError("Wrong credentials!")
      }
    });
  }

  return (
    <>
    <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <h5 className="navbar-brand">Navbar</h5>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Register" className='nav-link'>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className='Container'>
      <h2>Login</h2>
      <form onSubmit={loginUser}>
          <input onChange={(e) => setUsername(e.target.value)} placeholder='username' type='text' value={username} className={authError ? "form-control mb-3 border-danger":"form-control mb-3"}></input>
          <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" value={password} className={authError ? "form-control mb-3 border-danger":"form-control mb-3"}></input>
          {authError && <div className='text-danger mb-2'>{authError}</div>}
          <button onClick={loginUser} type="button" className="btn btn-primary">Login</button>
      </form>
    </div>
    </>
  )
};

export default Login;