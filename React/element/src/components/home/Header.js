import React, { Component } from 'react'
import Search from '../header/Search'
import Location from '../header/Location'
import Download from '../header/Download'
import NavLink from '../header/NavLink'
import Advertise from '../header/Advertise'

export default class extends Component {
  render() {
    return (
      <header className="el-home-header">
        <Location />
        <Search />
        <Download />
        <NavLink />
        <Advertise />
      </header>
    )
  }
}
