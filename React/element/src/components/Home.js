import React, { Component } from 'react'
import Header from './home/Header'
import Main from './home/Main'
import Search from './header/Search'
import Download from './header/Download'
import NavLink from './header/NavLink'
import Advertise from './header/Advertise'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="el-home">
        <Header />
        <Search />
        <Download />
        <NavLink />
        <Advertise />
        <Main />
        <div className="bottom" />
      </div>
    )
  }
}
