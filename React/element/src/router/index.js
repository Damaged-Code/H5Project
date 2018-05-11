import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Find from '../components/Find'
import Order from '../components/Order'
import User from '../components/User'
import Search from '../components/Search'
import Login from '../components/Login'
import ShopInfo from '../components/ShopInfo'
import Settlement from '../components/Settlement'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/find',
    exact: true,
    component: Find,
  },
  {
    path: '/order',
    exact: true,
    component: Order,
  },
  {
    path: '/user',
    exact: true,
    component: User,
  },
  {
    path: '/search',
    exact: true,
    component: Search,
  },
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/shopInfo',
    exact: true,
    component: ShopInfo,
  },
  {
    path: '/settlement',
    exact: true,
    component: Settlement,
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
