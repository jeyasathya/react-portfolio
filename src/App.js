import logo from './logo.svg';
import './App.css';
import './css/portfolio.css'
import NavBar from  './components/NavBar'
import Intro from "./components/Intro"
import RecentPosts from './components/RecentPosts';
import FeaturedWork from'./components/FeaturedWork';

function App() {
  return (
    <div>
       <div className="ctn">
        <NavBar> </NavBar>
        <Intro></Intro>
        <RecentPosts></RecentPosts>
        <FeaturedWork></FeaturedWork>
      </div>
    </div>
  );
}

export default App;
