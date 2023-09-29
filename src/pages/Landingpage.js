import React from 'react';
import './Landingpage.css';

function LandingPage({ navigateToLoginPage, navigateToSignupPage }) {
  return (
    <div className="landing-page">
      <h1>Welcome to MindSutra</h1>

      <div className="content-container">
        <div className="button-container">
          <button className="login-button" onClick={navigateToLoginPage}>Login</button>
          <button className="signup-button" onClick={navigateToSignupPage}>Sign Up</button>
        </div>
        <div className="terms-text">
          By continuing, you agree to MindSutra's Terms of Use. Read our Privacy Policy.
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
