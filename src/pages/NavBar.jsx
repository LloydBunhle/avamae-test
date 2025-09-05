import React from "react";
import "../styles/Navbar.css"
import logo from "../assets/logo.svg";


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo-container">
            
            <a href="#" className="logo-container">
            <img src={logo} alt="Company Logo" className="logo-icon" />
              <span className="company-name"></span>
            </a>
          </div>
          <div className="nav-links-desktop">
            <a href={`/`} className="nav-link">Home</a>
            <a href={`/about`} className="nav-link">About</a>
            <a href={`/contact`} className="nav-link">Contact</a>
            <button className="sign-in-btn">Sign In</button>
          </div>
       </div>   
    </div>
    </nav>
  );
};

export default NavBar;