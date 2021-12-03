import React, {useState} from 'react';
import './NavBar.scss';
import {FaBars} from 'react-icons/fa';

function NavBar() {
  const [IsClick, setIsClick] = useState(false);

  const onClickMenu = () => {
    setIsClick(!IsClick);
  };

  return (
    <nav>
      <div className="logo">MIN SEOK</div>
      <div className={IsClick ? 'menu' : 'menu clamp'}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <FaBars className="hamberger-icon" onClick={onClickMenu} />
    </nav>
  );
}

export default NavBar;
