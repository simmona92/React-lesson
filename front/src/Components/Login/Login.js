import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

   
   const loginUser = async (e) => {
    e.preventDefault();
      await fetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {
          'Content-type': 'application/json'
      }, 
    }).then((response)=> {
      console.log(response)
      if(response.ok){
        navigate("/Components/Pages")
      }
    });
  }
   
    
  return (
    <div className='Container'>
        <form onSubmit={loginUser}>
            <input onChange={(e) => setUsername(e.target.value)} placeholder='username' type='text' value={username} className="form-control mb-3"></input>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='password' type="password" value={password} className="form-control mb-3"></input>
            <button onClick={loginUser} type="button" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
};

export default Login;