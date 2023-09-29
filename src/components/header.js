// Header.js
import React from 'react';
import './Header.css';

function Header({navigateToSettingsPage}) {
  return (
    <header className="app-header">
      <h1></h1>
      <button className="settings-button" onClick={navigateToSettingsPage}>Settings</button>
    </header>
  );
}

export default Header;
