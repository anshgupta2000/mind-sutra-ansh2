import React from "react";
import "./Signuppage.css"; // Make sure to import your CSS file

function SignupPage({ navigateToQuestionnairePage, navigateToLandingPage, navigateToLoginPage }) {
  const handleSignupClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Here you can add any other logic if needed before navigation.
    navigateToQuestionnairePage(); // Navigate to Questionnaire page.
  };

  return (
    <div className="signup-container">
      <div className="back-button" onClick={navigateToLandingPage}>
        {"< Back"}
      </div>
      <h2>Create an Account</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email address" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password" />
        </div>
        <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>
      </form>
      <p className="login-link">
        Already have an account? <a href="#" onClick={navigateToLoginPage}>Log In</a>
      </p>
    </div>
  );
}

export default SignupPage;
