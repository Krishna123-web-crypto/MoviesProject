import React, { useState } from "react";
import "../assets/Contact.css";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {submitted ? (
        <p className="thank-you">Thank you for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name:</label>
          <input type="text" required />

          <label>Email:</label>
          <input type="email" required />

          <label>Message:</label>
          <textarea rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

