import React, { Component } from 'react'
import Search from './header/Search'
import Location from './header/Location'

export default class extends Component {
  render() {
    return (
      <header className="el-home-header">
        <Location />
        <Search />
      </header>
    )
  }
}
