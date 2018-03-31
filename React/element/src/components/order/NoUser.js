import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NoUser extends Component {
  render() {
    return (
      <div className="no-user">
        <img
          src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png"
          alt=""
        />
        <h3>登录后查看外卖订单</h3>
        <Link to="/user">
          <button>请登陆</button>
        </Link>
        <div className="bottom" />
      </div>
    )
  }
}
