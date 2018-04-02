import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const info = {
  imgUrl:
    'https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png',
  text: '登录后查看外卖订单',
  hasUser: false,
}
export default class NoUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: this.props.info || info,
    }
  }

  render() {
    return (
      <div className="no-user">
        <img src={this.state.info.imgUrl} alt="" />
        <h3>{this.state.info.text}</h3>
        <Link to="/user">
          {this.state.info.hasUser ? '' : <button>请登陆</button>}
        </Link>
      </div>
    )
  }
}
