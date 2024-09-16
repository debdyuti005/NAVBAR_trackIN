// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState({ language: false, more: false });

  const toggleDropdown = (name) => {
    setDropdown((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="trackIN Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li
          className="dropdown"
          onMouseEnter={() => toggleDropdown('language')}
          onMouseLeave={() => toggleDropdown('language')}
        >
          <a href="#language">Language</a>
          {dropdown.language && (
            <ul className="dropdown-content">
              <li><a href="#english">English</a></li>
              <li><a href="#spanish">Spanish</a></li>
              <li><a href="#french">French</a></li>
            </ul>
          )}
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => toggleDropdown('more')}
          onMouseLeave={() => toggleDropdown('more')}
        >
          <a href="#more">More</a>
          {dropdown.more && (
            <ul className="dropdown-content">
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          )}
        </li>
      </ul>
      <div className="nav-buttons">
        <button className="btn">AI chat</button>
        <button className="btn login">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
