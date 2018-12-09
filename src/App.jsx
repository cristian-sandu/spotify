import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen To Music on Spotify
        </a>
      </header>
    </div>
  );
}

export default App;