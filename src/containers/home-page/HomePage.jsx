import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Input } from '@material-ui/core/'

const HomePage = () => (
  <div>
    <Input placeholder="Get your Music" />
    <Button
      color="default"
      component={ Link }
      rel="noopener noreferrer"
      to="/search"
      variant="outlined"
    >
      Search
    </Button>

  </div>
)

export default HomePage
