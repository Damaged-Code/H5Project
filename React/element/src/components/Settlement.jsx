import React, { Component } from 'react'
import HeadTitle from './parts/HeadTitle'

export default class Settlement extends Component {
  render() {
    return (
      <div className="el-settlement">
        <HeadTitle path="/" text="确认订单" />
        <span>1</span>
      </div>
    )
  }
}
