import React, { useState } from 'react';
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for contacting us! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          /><br />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
          /><br />
          <textarea
            placeholder="Your Message"
            required
            style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '8px' }}
          ></textarea><br />
          <button type="submit" style={{ padding: '10px 20px' }}>Send</button>
        </form>
      )}
    </div>
  );
}
