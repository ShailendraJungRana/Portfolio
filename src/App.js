import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <SocialLinks/>
    </div>
  );
}

export default App;
