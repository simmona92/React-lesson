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
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h5 class="navbar-brand" href="#">Navbar</h5>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/Components/Login" className='nav-link'>Login</Link>
              </li>
              <li class="nav-item">
                <Link to="/Components/Register" className='nav-link'>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        {/*<Route path='/components/Text' element = {<Text text = {"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."} maxLength = {35}/>} />*/}
        
        <Route path='/Components/Login' element={<Login/>}/>
        <Route path='/Components/Register' element={<Register/>}/>
        
        
      
        <Route path='/Components/Pages' element={<Home/>}/>
        <Route path='/Components/Praktika-2' element={<Posts/>}/>
      </Routes>
    </>
  );
}

export default App;
