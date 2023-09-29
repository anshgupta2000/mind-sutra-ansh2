import React from "react";
import "./Loginpage.css";

function LoginPage({ navigateToLandingPage, navigateToSignupPage}) {
  let showPassword = false;

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
    showPassword = !showPassword;
  };

  

  return (
    <div className="container">
      <div className="back-button" onClick={navigateToLandingPage}>
        {"< Back"}
      </div>
      <div className="logo">
        <img src="src\logo.svg" alt="MindSutra Logo" />
        <p>MindSutra</p>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <div className="input-container">
          <label>Email Address</label>
          <input type="text" placeholder="Enter your email address" />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            id="passwordInput"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
          />
          <button className="show-password-button" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>
        <div className="password-options">
          <div className="forgot-password">
            <button className="forgot-password-button">Forgot my password</button>
          </div>
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
        </div>
        <button className="login-button">Login</button>
      </div>
      <div className="signup-link">
        <p>Don't have an account? <a href="#" onClick={navigateToSignupPage}>Sign Up</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
