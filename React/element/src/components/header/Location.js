import React, { Component } from 'react'
import Svg from '../Svg'

export default class Location extends Component {
  render() {
    return (
      <div className="location">
        <Svg icon="icon-location" />
        <p>福中三路深圳市民中心</p>
      </div>
    )
  }
}
