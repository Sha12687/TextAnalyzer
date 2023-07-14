import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
    return (
        <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Restaurant Name</Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
