import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Svg from '../Svg'
import classNames from 'classnames'

const routes = [
  {
    path: '/',
    exact: true,
    component: '',
    text: '外卖',
    icon: 'icon-evil',
    active: true
  },
  {
    path: '/',
    exact: false,
    component: '',
    text: '发现',
    icon: 'icon-faxian',
    active: false
  },
  {
    path: '/',
    exact: false,
    component: '',
    text: '订单',
    icon: 'icon-dingdanye',
    active: false
  },
  {
    path: '/',
    exact: false,
    component: '',
    text: '我的',
    icon: 'icon-tubiaolunkuo-',
    active: false
  }
]
export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: routes
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
                <Link
                  className={classNames({ active: route.active })}
                  to={route.path}
                  component={route.component}
                  onClick={this.LinkActiveChange}
                  data-index={index}
                >
                  <Svg icon={route.icon} />
                  <p>{route.text}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </footer>
    )
  }
}
