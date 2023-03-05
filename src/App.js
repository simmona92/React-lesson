import './App.css';
import Boxes from './Components/Boxes/Boxes';
import Header from './Components/Header/Header';
import PostContent from './Components/PostContent/PostContent';
import PostImage from './Components/PostImage/PostImage';
import Posts from './Components/Praktika-2/Posts';
import Cards from './Components/Praktika-7/Cards';
import Tasks from './Components/Tasks/Tasks';
import Text from './Components/Text/Text';

function App() {
  return (
    <div className="">
      <Header title="Headeris" src="https://th.bing.com/th/id/R.01bdcd131c12d79bd17d471ee5448edd?rik=JpyjRRKPxw3kMw&pid=ImgRaw&r=0" />
      <PostImage src="https://th.bing.com/th/id/R.01bdcd131c12d79bd17d471ee5448edd?rik=JpyjRRKPxw3kMw&pid=ImgRaw&r=0" />
      <PostContent titleOne="Antraštė 1" titleTwo="Antraštė 2" text="Some quick example text to build on the card title and make up the bulk of the card's content." />
      <Boxes />
      {/* 2 praktika */}
      <Posts/>
      {/* 3 praktika */}
      <Text text = {"A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."} maxLength = {35}/>
      {/* 5 praktika */}
      <Tasks/>
      {/*7 praktika */}
      <Cards/>
    </div>
  );
}

export default App;
