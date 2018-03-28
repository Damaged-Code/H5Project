import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Announcement from '../components/Announcement'

export default class MyRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact to="/" component={Home} />
          <Route to="/announcement" component={Announcement} />
        </Switch>
      </Router>
    )
  }
}
