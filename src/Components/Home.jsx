import React from "react";
import { Link } from "react-router-dom";
import "../assets/Home.css";
export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to the Online Movie Tickets Booking</h1>
      <p className="home-subtext">Book your movie tickets online easily and quickly!</p>
      <Link to="/Login">
        <button className="home-login-button">Login</button>
      </Link>
    </div>
  );
}


