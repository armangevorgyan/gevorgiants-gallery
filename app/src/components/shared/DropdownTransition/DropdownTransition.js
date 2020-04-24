import React, {useState} from 'react';

import {CSSTransitionGroup} from 'react-transition-group'; // ES6
import 'components/shared/DropdownTransition/DropDownTransition.scss';


const Submenu = () => <ul className="nav__submenu">
  <li className="nav__submenu-item ">
    <a>Our Company</a>
  </li>
  <li className="nav__submenu-item ">
    <a>Our Team</a>
  </li>
  <li className="nav__submenu-item ">
    <a>Our Portfolio</a>
  </li>
</ul>;


const DropdownTransition = () => {
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const handleHover = (event) => {
    setShowAboutMenu(true);
  };

  const handleLeave = (event) => {
    setShowAboutMenu(false);
  };

  return <nav className="nav">
    <ul className="nav__menu">
      <li className="nav__menu-item"
          onMouseLeave={handleLeave}>
        <a onMouseEnter={handleHover}>
          About
        </a>
        <CSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
      >
          {showAboutMenu && <div className="submenu-container"><Submenu /></div>}
        </CSSTransitionGroup>
      </li>
    </ul>
  </nav>;
};


export default DropdownTransition;
