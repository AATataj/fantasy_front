import React from 'react';
import './App.css';
import './NavBar.js';
import logo from './logo.svg';


function InProgress() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        <p>
          Welcome to the NBA Fantasy AI Dashboard <br />
          This Page Is In Progress!
        </p>
      </header>
    </div>
  );
}

export default InProgress;