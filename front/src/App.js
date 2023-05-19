import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Tasks from './Components/Tasks/Tasks';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Components/Tasks' element={<Tasks/>}/>
      </Routes>

      {/*<Route path='/components/Text' element = {<Text text = {"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."} maxLength = {35}/>} /> */}
    </>
  );
}

export default App;
