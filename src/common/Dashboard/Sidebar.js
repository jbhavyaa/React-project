import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Add styles for Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      
        <div className='h1'><h1> Reactify</h1></div>
        <br></br>
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/dashboard/logout">Logout</Link>
      
    </div>
  );
};

export default Sidebar;