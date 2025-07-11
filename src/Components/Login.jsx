import React, { useState } from "react";
import "../assets/Login.css";
export default function Login() {
  const [loginMethod, setLoginMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with email: ${email}`);
  };
  const handleSendOtp = (e) => {
    e.preventDefault();
    setOtpSent(true);
    alert(`OTP sent to phone: ${phone}`);
  };
  const handleOtpLogin = (e) => {
    e.preventDefault();
    alert(`Logged in with phone: ${phone} and OTP: ${otp}`);
  };
  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <div className="login-tabs">
        <button
          className={`login-tab ${loginMethod === "email" ? "email-active" : "inactive"}`}
          onClick={() => setLoginMethod("email")}
        >
          Login with Email
        </button>
        <button
          className={`login-tab ${loginMethod === "phone" ? "phone-active" : "inactive"}`}
          onClick={() => setLoginMethod("phone")}
        >
          Login with Phone
        </button>
      </div>
      {loginMethod === "email" && (
        <form onSubmit={handleEmailLogin}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="login-input" />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="login-input" />
          <button type="submit" className="login-button">Login</button>
        </form>
      )}
      {loginMethod === "phone" && (
        <form onSubmit={otpSent ? handleOtpLogin : handleSendOtp}>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required disabled={otpSent} className="login-input" />
          {otpSent && (
            <>
              <label>OTP:</label>
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required className="login-input" />
            </>
          )}
          <button type="submit" className="login-button">{otpSent ? "Verify OTP" : "Send OTP"}</button>
        </form>
      )}
    </div>
  );
}

