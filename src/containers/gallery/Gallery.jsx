import React from 'react'
import axios from 'axios'

import {
  API_ENDPOINT,
} from 'common/constants'

class Gallery extends React.Component {
  state = {
    fetchResult: 'EMPTY_RESULT',
  }

  componentDidMount() {
    axios.get(API_ENDPOINT)
      .then((response) => {
        this.setState({
          fetchResult: JSON.stringify(response),
        })
      })
      .catch((error) => {
        this.setState({
          fetchResult: JSON.stringify(error),
        })
      })
  }

  render() {
    const { fetchResult } = this.state

    return (
      <div>
        <span>
          { fetchResult }
        </span>
      </div>
    )
  }
}

export default Gallery
