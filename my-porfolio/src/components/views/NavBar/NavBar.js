import React, {useState} from 'react';
import './NavBar.scss';
import {FaBars} from 'react-icons/fa';
import {Link, animateScroll} from 'react-scroll';

const NavBar = () => {
  const [IsClick, setIsClick] = useState(false);

  const onClickMenu = () => {
    setIsClick(!IsClick);
  };

  const onClickTop = () => {
    animateScroll.scrollToTop();
    setIsClick(false);
  };

  return (
    <nav>
      <div className="logo">DIAMIN</div>
      <div className={IsClick ? 'menu clamp' : 'menu'}>
        <ul>
          <li onClick={onClickTop}>Home</li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            onClick={() =>
              setTimeout(() => {
                setIsClick(false);
              }, 1250)
            }
          >
            <li>About</li>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            onClick={() =>
              setTimeout(() => {
                setIsClick(false);
              }, 1250)
            }
          >
            <li>Skills</li>
          </Link>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <FaBars className="hamberger-icon" onClick={onClickMenu} />
    </nav>
  );
};

export default NavBar;
