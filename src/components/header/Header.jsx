import React from 'react'

import logo from 'styles/logo.svg'

const Header = () => (
  <>
    <header className="App-header">
      <img alt="logo" className="App-logo" src={ logo } />
      <p> Yo </p>
      <a
        className="App-link"
        href="https://www.spotify.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Listen To Music on Spotify
      </a>
    </header>
  </>
)

export default Header
