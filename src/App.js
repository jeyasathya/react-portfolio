import logo from './logo.svg';
import './App.css';
import './css/portfolio.css'
import NavBar from  './components/NavBar'
import Intro from "./components/Intro"
import RecentPosts from './components/RecentPosts';
import FeaturedWork from'./components/FeaturedWork';
import Footer from './components/Footer';
function App() {
  return (
    <div>
       <div className="ctn">
        <NavBar> </NavBar>
        <Intro></Intro>
        <RecentPosts></RecentPosts>
        <FeaturedWork></FeaturedWork>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
