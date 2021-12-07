import './App.scss';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
