import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="../Components/Praktika-2" className="nav-link">Post</Link></li>
            <li className="nav-item"><Link to="../Components/Text" className="nav-link">Text</Link></li>
            <li className="nav-item"><Link to="../Components/Tasks" className="nav-link">Todos</Link></li>
            <li className="nav-item"><Link to="../Components/Users" className="nav-link">Users</Link></li>
            <li className="nav-item"><Link to="../Components/Cards" className="nav-link">Cards</Link></li>
            <li className="nav-item"><Link to="../Components/Students" className="nav-link">Students</Link></li>
          </ul>
        </div>
    </div>
</nav>
  )
}

export default Home;