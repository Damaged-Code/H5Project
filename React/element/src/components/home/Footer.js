import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Svg from '../Svg'
import classNames from 'classnames'

const routes = [
  {
    path: '/',
    exact: true,
    component: '',
    text: '外卖',
    icon: 'icon-evil',
    active: true,
  },
  {
    path: {
      pathname: '/find',
    },
    exact: true,
    component: '',
    text: '发现',
    icon: 'icon-faxian',
    active: false,
  },
  {
    path: '/order',
    exact: true,
    component: '',
    text: '订单',
    icon: 'icon-dingdanye',
    active: false,
  },
  {
    path: '/user',
    exact: true,
    component: '',
    text: '我的',
    icon: 'icon-tubiaolunkuo-',
    active: false,
  },
]
export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: routes,
    }
  }
  LinkActiveChange = e => {
    e.stopPropagation()
    let tag = e.target.parentNode,
      tagIndex = +tag.getAttribute('data-index')

    this.state.routes.map((route, index) => {
      if (index === tagIndex) {
        route.active = true
      } else {
        route.active = false
      }
      return true
    })
  }
  render() {
    return (
      <footer className="el-home-footer">
        <ul>
          {this.state.routes.map((route, index) => {
            return (
              <li key={index}>
                <NavLink activeClassName="active" to={route.path}>
                  <Svg icon={route.icon} />
                  <p>{route.text}</p>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </footer>
    )
  }
}
