import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Posts from './Components/Praktika-2/Posts';
import Cards from './Components/Praktika-7/Cards';
import Students from './Components/Praktika-studentai/Students';
import Tasks from './Components/Tasks/Tasks';
import Text from './Components/Text/Text';
import Users from './Components/Praktika-6/Users';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">React</a>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to='/components/Praktika-2' className="nav-link">Praktika-2</Link></li>
            <li className="nav-item"><Link to='/components/Text' className="nav-link">Praktika-3</Link></li>
            <li className="nav-item"><Link to='/components/Tasks' className="nav-link">Praktika-5</Link></li>
            <li className="nav-item"><Link to='/components/Praktika-6' className="nav-link">Praktika-6</Link></li>
            <li className="nav-item"><Link to='/components/Praktika-7' className="nav-link">Praktika-7</Link></li>
            <li className="nav-item"><Link to='/components/Praktika-studentai' className="nav-link">Praktika-1</Link></li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/components/Login" className="nav-link">Login</Link></li>
            <li className="nav-item"><Link to="/components/Register" className="nav-link">Register</Link></li>
          </ul>
        </div>
        </div>
      </nav>
      <Routes>
        <Route path='/components/Praktika-2' element = {<Posts/>} />
        <Route path='/components/Text' element = {<Text text = {"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."} maxLength = {35}/>} />
        <Route path='/components/Tasks' element = {<Tasks/>} />
        <Route path='/components/Praktika-6' element = {<Users/>} />
        <Route path='/components/Praktika-7' element = {<Cards/>} />
        <Route path='/components/Praktika-studentai' element = {<Students/>} />
        <Route path='/components/Login' element = {<Login/>}/>
        <Route path='/components/Register' element = {<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
