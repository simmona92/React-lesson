import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('http://localhost:4000/api/v1/logout', {
      credentials: 'include',
      method: 'POST'
    });
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="../Components/Tasks" className="nav-link">Todos</Link></li>
            <li className="nav-item"><button onClick={handleLogout} className="nav-link">Logout</button></li>
          </ul>
        </div>
    </div>
</nav>
  )
}

export default Home;