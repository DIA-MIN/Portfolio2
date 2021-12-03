import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <nav>
      <div className="logo">MIN SEOK</div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
