import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Posts from './Components/Praktika-2/Posts';
import Cards from './Components/Praktika-7/Cards';
import Students from './Components/Praktika-studentai/Students';
import Tasks from './Components/Tasks/Tasks';
import Text from './Components/Text/Text';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">React</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><Link to='/components/Praktika-2' class="nav-link">Praktika-2</Link></li>
            <li class="nav-item"><Link to='/components/Text' class="nav-link">Praktika-3</Link></li>
            <li class="nav-item"><Link to='/components/Tasks' class="nav-link">Praktika-5</Link></li>
            <li class="nav-item"><Link to='/components/Praktika-7' class="nav-link">Praktika-7</Link></li>
            <li class="nav-item"><Link to='/components/Praktika-studentai' class="nav-link">Praktika-1</Link></li>
          </ul>
        </div>
        </div>
      </nav>
      <Routes>
        <Route path='/components/Praktika-2' element = {<Posts/>} />
        <Route path='/components/Text' element = {<Text text = {"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."} maxLength = {35}/>} />
        <Route path='/components/Tasks' element = {<Tasks/>} />
        <Route path='/components/Praktika-7' element = {<Cards/>} />
        <Route path='/components/Praktika-studentai' element = {<Students/>} />
      </Routes>
    </>
  );
}

export default App;
