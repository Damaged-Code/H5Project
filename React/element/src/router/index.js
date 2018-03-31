import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Find from '../components/Find'
import Order from '../components/Order'
import User from '../components/User'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/find',
    exact: false,
    component: Find,
  },
  {
    path: '/order',
    exact: false,
    component: Order,
  },
  {
    path: '/user',
    exact: false,
    component: User,
  },
  {
    exact: true,
    component: Home,
  },
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
