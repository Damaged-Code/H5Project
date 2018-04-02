import React, { Component } from 'react'
import HeadTitle from './parts/HeadTitle'
import NoUser from './order/NoUser'
import Footer from './home/Footer'
import { LocalStorage } from '../utils/storage'

let info = {
  imgUrl:
    'https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png',
  text: '登录后查看外卖订单',
  hasUser: false,
}
const localStorage = new LocalStorage()
export default class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasUser: false,
    }
  }
  componentWillMount() {
    if (localStorage.get('user')) {
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
          <NoUser info={info} />
        </main>
        <div className="bottom" />
        <Footer />
      </div>
    )
  }
}
