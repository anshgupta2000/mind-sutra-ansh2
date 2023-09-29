import React, { useState } from 'react';
import './App.css';
import LandingPage from './pages/Landingpage';
import LoginPage from './pages/Loginpage';
import SignupPage from './pages/Signuppage';
import Questionnaire from './pages/Questionnaire';
import Chatpage from './pages/Chatpage';
import Settingspage from './pages/Settingspage';
import Mainpage from './pages/Mainpage';
import Header  from './components/header.js'; // Import the Header component from the correct path

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToLoginPage = () => {
    setCurrentPage('login');
  };

  const navigateToSignupPage = () => {
    setCurrentPage('signup');
  };

  const navigateToQuestionnairePage = () => {
    setCurrentPage('questionnaire');
  };

  const navigateToLandingPage = () => {
    setCurrentPage('landing');
  };

  const navigateToChatPage = () => {
    setCurrentPage('chat');
  };

  const navigatetoSettingsPage = () => {
    setCurrentPage('settings');
  };

  const navigateToMainPage = () => {
    setCurrentPage('main');
  };

  const renderPage = () => {
    if (currentPage === 'landing') {
      return (
        <LandingPage
          navigateToLoginPage={navigateToLoginPage}
          navigateToSignupPage={navigateToSignupPage}
        />
      );
    } else if (currentPage === 'login') {
      return (
        <LoginPage
          navigateToLandingPage={navigateToLandingPage}
          navigateToSignupPage={navigateToSignupPage}
        />
      );
    } else if (currentPage === 'signup') {
      return (
        <SignupPage
          navigateToQuestionnairePage={navigateToQuestionnairePage}
          navigateToLandingPage={navigateToLandingPage}
          navigateToLoginPage={navigateToLoginPage}
        />
      );
    } else if (currentPage === 'questionnaire') {
      return <Questionnaire 
      navigateToChatPage={navigateToChatPage}
      navigateToMainPage={navigateToMainPage}
       />;
    } else if (currentPage === 'chat') {
      return <Chatpage />;
    }
    else if (currentPage === 'settings') {
      return <Settingspage
      navigateToMainPage={navigateToMainPage}
      />;
    }
    else if (currentPage === 'main') {
      return <Mainpage
      navigateToChatPage={navigateToChatPage}
      />;
    }
  };

  return (
    <div className="App">
      <Header navigateToSettingsPage={navigatetoSettingsPage}
      /> {/* Include the Header component */}
      {renderPage()}
    </div>
  );
}

export default App;