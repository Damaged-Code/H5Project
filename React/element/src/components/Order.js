import React, { Component } from 'react'
import HeadTitle from './parts/HeadTitle'
import NoUser from './order/NoUser'
import Footer from './home/Footer'
import localStorage from 'localstorage'

const user = new localStorage('user')

let info = 0
export default class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasUser: false,
    }
  }
  componentWillMount() {
    if (user.get('user').length > 1) {
      info = {
        imgUrl:
          'https://fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png',
        text: '近三个月无外卖订单记录',
        hasUser: true,
      }
      this.setState({
        hasUser: true,
      })
    }
  }
  render() {
    return (
      <div className="el-my-order">
        <header>
          <HeadTitle text="我的订单" />
        </header>
        <main className="main">
          {this.state.hasUser ? <NoUser info={info} /> : <NoUser />}
        </main>
        <div className="bottom" />
        <Footer />
      </div>
    )
  }
}
