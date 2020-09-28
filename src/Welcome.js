import React from 'react';
import './App.css';
import './NavBar.js';
import logo from './logo.svg';

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />  
        <p>
          Welcome to the NBA Fantasy AI Dashboard <br />
          This is the default page
        </p>
      </header>
    </div>
  );
}

export default Welcome;


