import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Online Movie Tickets Booking</h1>
      <p>Book your movie tickets online easily and quickly!</p>
      <Link to="/Login">
        <button
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#0f2c47";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#0f2c47";
          }}
        >
          Login
        </button>
      </Link>
    </div>
  );
}
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  heading: {
    fontSize: "40px",
    color: "#0f2c47",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    border: "2px solid #0f2c47",
    backgroundColor: "white",
    color: "#0f2c47",
    fontWeight: "600",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
}
