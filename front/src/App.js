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
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Components/Praktika-2' element={<Posts/>}/>
        <Route path='/components/Text' element = {<Text text = {"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."} maxLength = {35}/>} />
        <Route path='/Components/Tasks' element={<Tasks/>}/>
        <Route path='/Components/Users' element={<Users/>}/>
        <Route path='/Components/Cards' element={<Cards/>}/>
        <Route path='/Components/Students' element={<Students/>}/> 
      </Routes>
    </>
  );
}

export default App;
