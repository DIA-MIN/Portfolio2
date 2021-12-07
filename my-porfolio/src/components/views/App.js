import './App.scss';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
