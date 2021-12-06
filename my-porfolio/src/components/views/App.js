import './App.scss';
import React, {useRef} from 'react';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const onHomeClick = () => {
    homeRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const onAboutClick = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="App">
      <NavBar onHomeClick={onHomeClick} onAboutClick={onAboutClick} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills />
    </div>
  );
}

export default App;
