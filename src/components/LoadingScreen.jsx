import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">KDT</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <div className="loading-bar-wrap">
          <div className="loading-bar" />
        </div>
        <p className="loading-text">Initializing Portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
