import React, { useState } from "react";
export default function Login() {
  const [loginMethod, setLoginMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  // Handle email login
  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with email: ${email}`);
  };
  // Send OTP to phone
  const handleSendOtp = (e) => {
    e.preventDefault();
    setOtpSent(true);
    alert(`OTP sent to phone: ${phone}`);
  };
  // Handle OTP login
  const handleOtpLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with phone: ${phone} and OTP: ${otp}`);
  };
    // Styles
  const containerStyle = {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };
  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };
  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "10px",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };
  const tabStyle = {
    marginRight: "10px",
    padding: "8px 16px",
    backgroundColor: loginMethod === "email" ? "#1e3a8a" : "#ccc",
    color: loginMethod === "email" ? "#fff" : "#000",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };
  const tabStylePhone = {
    ...tabStyle,
    backgroundColor: loginMethod === "phone" ? "#1e3a8a" : "#ccc",
    color: loginMethod === "phone" ? "#fff" : "#000",
  };
  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      {/* Login method switch buttons */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button style={tabStyle} onClick={() => setLoginMethod("email")}>
          Login with Email
        </button>
        <button style={tabStylePhone} onClick={() => setLoginMethod("phone")}>
          Login with Phone
        </button>
      </div>
      {/* Email login form */}
      {loginMethod === "email" && (
        <form onSubmit={handleEmailLogin}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      )}
      {/* Phone login form */}
      {loginMethod === "phone" && (
        <form onSubmit={otpSent ? handleOtpLogin : handleSendOtp}>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            disabled={otpSent}
            style={inputStyle}
          />
          {otpSent && (
            <>
              <label>OTP:</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                style={inputStyle}
              />
            </>
          )}
          <button type="submit" style={buttonStyle}>
            {otpSent ? "Verify OTP" : "Send OTP"}
          </button>
        </form>
      )}
    </div>
  );
}
