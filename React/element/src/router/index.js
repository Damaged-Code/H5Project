import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    component: null
  },
  {
    exact: true,
    component: null
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
