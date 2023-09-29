import React from 'react';
import './Settingspage.css'; // Import your CSS file


function SettingsPage({navigateToMainPage}) {
  return (
    <div className="settings-container">
      <div className="user-info">
        
        <h2>User's Name</h2>
      </div>
      <div className="account-settings">
        <h3>Account Settings</h3>
        <ul>
          <li className="settings-option">Edit Profile</li>
          <li className="settings-option">Change Password</li>
          <li className="settings-option">Add a Payment Method</li>
          <li className="settings-option">Push Notifications</li>
          <li className="settings-option">Dark Mode</li>
        </ul>
      </div>
      <button className="button" onClick={navigateToMainPage}>Mainpage</button>
    </div>
  );
}

export default SettingsPage;
