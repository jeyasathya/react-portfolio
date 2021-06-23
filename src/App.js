import logo from './logo.svg';
import './App.css';
import './css/portfolio.css'
import NavBar from  './components/NavBar'
import Intro from "./components/Intro"
import RecentPosts from './components/RecentPosts';

function App() {
  return (
    <div>
       <div className="ctn">
        <NavBar> </NavBar>
        <Intro></Intro>
        <RecentPosts></RecentPosts>
      </div>
    </div>
  );
}

export default App;
