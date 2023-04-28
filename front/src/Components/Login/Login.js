import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='Container'>
        <form>
            <input placeholder='username' type='text' className="form-control mb-3"></input>
            <input placeholder='password' type="password" className="form-control mb-3"></input>
            <button type="button" className="btn btn-primary">Login</button>
        </form>
    </div>
  )
};

export default Login;