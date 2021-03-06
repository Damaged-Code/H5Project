import React, { Component } from 'react'
import HeaderNav from './HeaderNav'
import CSSModules from 'react-css-modules'
import styles from '../../styles/Header.css'
class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header styleName="header">
        <div styleName="logo">
          <img src="https://security.ele.me/images/header_logo.png" alt="" />
        </div>
        <HeaderNav />
      </header>
    )
  }
}

export default CSSModules(Header, styles)
