import './App.css';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Shailendra from './components/Shailendra';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Shailendra/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <SocialLinks/>

    </div>
  );
}

export default App;
