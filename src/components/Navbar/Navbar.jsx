import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import './navbar.css';
import logo from '../../assets/gdscLogo.png';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const navDisplay = () => {
    if (showNav) {
      document.querySelector('.nav-items').classList.remove('showNav');
      document.getElementById('checkbox2').checked = false;
      setShowNav(!showNav);
    } else {
      document.querySelector('.nav-items').classList.add('showNav');
      setShowNav(!showNav);
      document.getElementById('checkbox2').checked = false
    }
  };

  return (
    <div className='nav'>
      <div className='logo'>
        <img src={logo} alt='gdsc_logo' />
      </div>

      <div className='nav-items'>
        <ul>
          <NavLink onClick={navDisplay} id='home' to='/'>
            Home
          </NavLink>
          <NavLink onClick={navDisplay} id='events' to='/events'>
            Events
          </NavLink>
          <NavLink onClick={navDisplay} id='team' to='/team'>
            Team
          </NavLink>
          <NavLink onClick={navDisplay} id='about' to='/about'>
            About
          </NavLink>
          <NavLink onClick={navDisplay} id='blog' to='/blog'>
            Blog
          </NavLink>
        </ul>
      </div>

      <div className='ham'>
        <input type='checkbox' id='checkbox2' className='checkbox2 visuallyHidden' />
        <label htmlFor='checkbox2'>
          <div className='hamburger hamburger2' onClick={navDisplay}>
            <span className='bar bar1'></span>
            <span className='bar bar2'></span>
            <span className='bar bar3'></span>
            <span className='bar bar4'></span>
          </div>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
