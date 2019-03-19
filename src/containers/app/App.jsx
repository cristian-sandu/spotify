import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import 'styles/App.css'

import {
  HomePage,
  Search,
 } from '..'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={ HomePage } />
      <Route exact path="/search" component={ Search } />
    </div>
  </BrowserRouter>
)

export default App
