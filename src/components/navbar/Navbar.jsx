import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import RealLogo from '../../assets/logo.png'; // Adjust the path to your logo
import './navbar.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={RealLogo} alt="Logo" className="logo" />
        </Link>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/connect" className="nav-link" onClick={closeMenu}>Connect</Link>
          </li>
          <li className="nav-item">
            <Link to="/listen" className="nav-link" onClick={closeMenu}>Listen</Link>
          </li>
          <li className="nav-item">
            <Link to="/give" className="nav-link" onClick={closeMenu}>Give</Link>
          </li>
          <li className="nav-item location-item">
            <Link to="/locations" className="nav-link" onClick={closeMenu}>
              Locations
            </Link>
            <span className="dropdown-icon-wrapper" onClick={toggleDropdown}>
              <AiOutlineDown className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`} />
            </span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/locations/calgary" className="dropdown-link" onClick={closeMenu}>Calgary</Link>
                <Link to="/locations/toronto" className="dropdown-link" onClick={closeMenu}>Toronto</Link>
                <Link to="/locations/vancouver" className="dropdown-link" onClick={closeMenu}>Vancouver</Link>
              </div>
            )}
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
