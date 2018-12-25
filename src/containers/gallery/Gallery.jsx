import React from 'react'
import axios from 'axios'

import { API_ENDPOINT } from '../../common/constants'

class Gallery extends React.Component {
  componentDidMount() {
    axios.get(API_ENDPOINT)
      .then((response) => {
        // handle success
        console.log(response)
      })
      .catch((error) => {
        // handle error
        console.log(error)
      })
      .then(() => {
        // always executed
      })
  }

  render() {
    return (
      <div>
        <span>
          { 'Salut' }
        </span>
      </div>
    )
  }
}

export default Gallery
