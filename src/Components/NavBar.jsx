import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.navInner}>
        {/* Logo Section */}
        <div style={styles.logoContainer}>
          <span style={styles.logoIcon}>🎬</span>
          <span style={styles.movieBook}>MovieBook</span>
        </div>
        {/* Navigation Links */}
        <ul style={styles.navList}>
          <li>
            <Link
              to="/"
              style={styles.navItem}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#163b5c")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              style={styles.navItem}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#163b5c")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              style={styles.navItem}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#163b5c")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
const styles = {
  nav: {
    backgroundColor: '#0f2c47',
    padding: '15px 30px',
    color: 'white',
  },
  navInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px', 
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoIcon: {
    fontSize: '24px',
  },
  movieBook: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '25px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  navItem: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: 'background 0.3s',
  },
}
