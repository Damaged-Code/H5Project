import React, { Component } from 'react'
import HeadTitle from './parts/HeadTitle'
import Address from './settlement/Address'

export default class Settlement extends Component {
  render() {
    return (
      <div className="el-settlement">
        <HeadTitle path="/" text="确认订单" />
        <Address />
        <span>1</span>
      </div>
    )
  }
}
