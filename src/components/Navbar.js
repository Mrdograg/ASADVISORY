import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MyDropdown from './MyDropdown';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = (event) => {
    event.target.blur(); // Remove focus after click
  };

  const toggleDropdown = (event) => {
    event.preventDefault();
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };

  return (
    <header className="navbar-header">
      <div className="top-bar">
        <div className="contact-info">
          <a href="tel:+91-9319530759" className="contact-link" onClick={handleClick}>+91-9205630759</a> | 
          <a href="mailto:info@asadvisory.in" className="contact-link" onClick={handleClick}>info@asadvisory.in</a> | 
          <a href="https://www.google.com/maps/dir//Keshav+Nagar+Ibrahimpur+Delhi/@28.7804722,77.1672094,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d006a66d51873:0x5e9900d9b39ec3b5!2m2!1d77.1672094!2d28.7804722?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-link" onClick={handleClick}>Location</a>
        </div>
      </div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={handleClick}>AS ADVISORY</Link>
        <ul className="navbar-links">
          <li><Link to="/" onClick={handleClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleClick}>About</Link></li>
          <li>
            <a href="#" onClick={toggleDropdown}>Our Services</a>
            {dropdownVisible && <MyDropdown />}
          </li>
          <li><Link to="https://drive.google.com/file/d/1l3VtMiJ7nN_Q-pIK9OdXX-zqsZhyTsuG/view?usp=sharing" onClick={handleClick}>Profile</Link></li>
          <li><Link to="/contact" onClick={handleClick}>Contact Us</Link></li>
          <li>
            <a 
              href="https://www.bis.gov.in/know-your-standard/" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={handleClick}
            >
              Know Your IS Code
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
