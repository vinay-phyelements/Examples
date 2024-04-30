import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <img src='./images/logo.png' alt="Logo" />
      </div>
      <ul className='nav-links'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
