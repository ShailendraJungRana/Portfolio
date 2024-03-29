import './App.css';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Shailendra from './components/Shailendra';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Shailendra/>
      <SocialLinks/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
