import React, {useState} from 'react';
import './NavBar.scss';
import {FaBars} from 'react-icons/fa';

const NavBar = ({onHomeClick, onAboutClick}) => {
  const [IsClick, setIsClick] = useState(false);

  const onClickMenu = () => {
    setIsClick(!IsClick);
  };

  const onScrollHome = () => {
    onHomeClick();
    setIsClick(!IsClick);
  };

  const onScrollAbout = () => {
    onAboutClick();
    setIsClick(!IsClick);
  };

  return (
    <nav>
      <div className="logo">DIAMIN</div>
      <div className={IsClick ? 'menu clamp' : 'menu'}>
        <ul>
          <li onClick={onScrollHome}>Home</li>
          <li onClick={onScrollAbout}>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <FaBars className="hamberger-icon" onClick={onClickMenu} />
    </nav>
  );
};

export default NavBar;
