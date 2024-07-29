import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import './dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="Sidebar-content">
      <Sidebar />
      </div>
      
      <div className="main-content">
        <Navbar /> 
              
        <table>
        <tr>
          <th>Fisrt Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
          </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        </table>
        
        <Outlet /> {/* Renders child routes */}
        </div>
      
    </div>
  );
};

export default Dashboard;