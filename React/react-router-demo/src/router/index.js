import React, { Component } from 'react'
import {  Route, Switch } from 'react-router-dom'
import Home from '../components/main/Home'
import Announcement from '../components/main/Announcement'

export default class MyRouter extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/announcement" component={Announcement} />
        </Switch>
    )
  }
}
