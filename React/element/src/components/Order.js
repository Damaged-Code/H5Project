import React, { Component } from 'react'
import HeadTitle from './parts/HeadTitle'
import NoUser from './order/NoUser'

export default class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="el-my-order">
        <header>
          <HeadTitle text="我的订单" />
        </header>
        <main className="main">
          <NoUser />
        </main>
      </div>
    )
  }
}
