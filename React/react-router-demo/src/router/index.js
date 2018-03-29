import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/main/Home'
import asyncGetComponents from '../utils/asyncGetComponents'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/announcement',
    exact: false,
    component: asyncGetComponents(() =>
      import('../components/main/Announcement')
    )
  },
  {
    exact: true,
    component: Home
  }
]
export default class MyRouter extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, index) => {
          return <Route key={index} {...route} />
        })}
      </Switch>
    )
  }
}
