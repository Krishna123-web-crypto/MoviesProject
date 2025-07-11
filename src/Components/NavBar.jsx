import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/NavBar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>🎬</span>
        <span>MovieBook</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

