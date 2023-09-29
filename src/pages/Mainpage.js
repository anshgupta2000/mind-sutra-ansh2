import React from 'react';
import './Mainpage.css';

function MainPage({navigateToChatPage}) {
  return (
    <div className="main-page">
      
      <div className="button-container">
        
        <div className="button" onClick={navigateToChatPage}>
        <h2>Let's Talk</h2>
        <img className="button-icon" src="/lets_talk_button.png" alt="Let's Talk Icon" width="20" height="20" />
          
          <p>Start a conversation with our chatbot</p>
        </div>
        <div className="button">
        <h2>Let's Analyze</h2>
        <img className="button-icon" src="/lets_analyze_button.png" alt="Let's Analyze Icon" width="20" height="20" />
          
          <p>Track your mental health trends and insights</p>
        </div>
        <div className="button">
        <h2>Quick Help</h2>
        <img className="button-icon" src="/quick_help_button.png" alt="Quick Help Icon" width="15" height="20" />
          
          <p>Access guided meditation exercises</p>
        </div>
        <div className="button">
        <h2>Connect with Therapist</h2>
        <img className="button-icon" src="/connect_with_therapist_button.png" alt="Connect with Therapist Icon" width="25" height="20" />
          
          <p>Schedule an appointment a therapist</p>
        </div>
        <div className="button">
        <h2>Daily Challenges</h2>
        <img className="button-icon" src="/daily_challenges_button.png" alt="Daily Challenges Icon" width="15" height="20" />
         
          <p>Engage in challenges for personal growth</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
