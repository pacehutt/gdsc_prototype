import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebar-items'>
        <li>
          <a href='/'>
            <i className='fa-brands fa-instagram'></i>
          </a>
        </li>
        <li>
          <a href='/'>
            <i className='fa-brands fa-facebook-f'></i>
          </a>
        </li>
        <li>
          <a href='/'>
            <i className='fa-brands fa-github'></i>
          </a>
        </li>
        <li>
          <a href='/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='/'>
            <i className='fa-brands fa-twitter'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
