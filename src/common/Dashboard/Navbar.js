import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='h1'><h1> Reactify</h1></div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." />
        <div className="navbar-buttons">
          <a href="#home" className="active">Home</a>
          <a href="#login">Login</a>
          <a href="#logout">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;