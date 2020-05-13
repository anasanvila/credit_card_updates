import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Cards from './components/cards'
import Home from './components/home'
import { LinkStyle, H1, Hr } from './styles/appStyle'

const App = () => {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
        <H1><LinkStyle><Link to='/'>Home</Link></LinkStyle></H1>
        <H1><LinkStyle><Link to='/cards'>Cards</Link></LinkStyle></H1>
          <Hr />
          <Route exact path='/' component={Home} />
          <Route path='/cards' component={Cards} />
        </div>
      </Router>
    )
}


export default App