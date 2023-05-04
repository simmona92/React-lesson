import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="../Components/Praktika-2" className="nav-link">Praktika-2</Link></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </div>
    </div>
</nav>
  )
}

export default Home;