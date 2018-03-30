import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    exact: true,
    component: Home
  }
]
export default class MyRouter extends Component {
  constructor(props) {
    super(props)
  }

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
