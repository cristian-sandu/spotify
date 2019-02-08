import React from 'react'
import { useFormInput, useWindowWidth } from 'hooks'
import { Button, Input } from '@material-ui/core'

import logo from 'styles/logo.svg'

const Header = () => {
  const windowWidth = useWindowWidth()
  const docTitle = useFormInput('Hooks')

  return (
    <>
      <header className="App-header">
        <img alt="logo" className="App-logo" src={ logo }/>
        <p> Hooks </p>

        <Button
          className="App-link"
          color="secondary"
          href="https://www.spotify.com"
          rel="noopener noreferrer"
          target="_blank"
          variant="outlined"
        >
          Listen To Music on Spotify
        </Button>

        <Input
          { ...docTitle }
          placeholder="Enter your name"
          style={ {
            marginTop: 20,
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          } }
        />

        <span style={ { marginTop: 10 } }>
          { `Window width: ${windowWidth}` }
        </span>

      </header>
    </>
  )
}

export default Header
