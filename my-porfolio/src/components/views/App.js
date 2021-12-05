import './App.scss';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
