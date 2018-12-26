import React from 'react'
import Button from '@material-ui/core/Button'

import logo from 'styles/logo.svg'

const Header = () => (
  <>
    <header className="App-header">
      <img alt="logo" className="App-logo" src={ logo } />
      <p> Yo </p>
      <Button
        variant="outlined"
        color="secondary"
        className="App-link"
        href="https://www.spotify.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Listen To Music on Spotify
      </Button>
    </header>
  </>
)

export default Header
