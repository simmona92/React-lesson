import './App.css';
import Box from './Components/Box/Box';
import Header from './Components/Header/Header';
import PostContent from './Components/PostContent/PostContent';
import PostImage from './Components/PostImage/PostImage';


function App() {
  return (
    <div className="App">
      <Header/>
      <PostImage/>
      <PostContent/>
      <Box/>
    </div>
  );
}

export default App;
