import './App.css';
import Boxes from './Components/Boxes/Boxes';
import Header from './Components/Header/Header';
import PostContent from './Components/PostContent/PostContent';
import PostImage from './Components/PostImage/PostImage';
import Posts from './Components/Praktika-2/Posts';

function App() {
  return (
    <div className="App">
      <Header title="Headeris" src="https://th.bing.com/th/id/R.01bdcd131c12d79bd17d471ee5448edd?rik=JpyjRRKPxw3kMw&pid=ImgRaw&r=0" />
      <PostImage src="https://th.bing.com/th/id/R.01bdcd131c12d79bd17d471ee5448edd?rik=JpyjRRKPxw3kMw&pid=ImgRaw&r=0" />
      <PostContent titleOne="Antraštė 1" titleTwo="Antraštė 2" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
      <Boxes />
      {/* 2 praktika */}
      <Posts/>
      {/* 3 praktika */}
      
    </div>
  );
}

export default App;
