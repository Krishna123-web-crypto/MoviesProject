import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css'; 
export default function NavBar() {
  return (
    <nav>
      <div>
        <div>
          <span className="logo-icon">🎬</span>
          <span className="movie-book">MovieBook</span>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-item">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}



