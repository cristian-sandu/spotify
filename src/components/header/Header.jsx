import React from 'react'

import logo from '../../style/logo.svg'

const Header = () => (
  <>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p> Yo </p>
      <a
        className="App-link"
        href="https://www.spotify.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Listen To Music on Spotify
      </a>
    </header>
  </>
)

export default Header
