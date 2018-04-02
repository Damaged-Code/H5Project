import React, { Component } from 'react'
import Svg from './Svg'
import fetch from 'node-fetch'
import localStorage from 'localstorage';

const user = new localStorage('user')
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  userLogin = async () => {
    let username = this.refs.username.value,
      password = this.refs.password.value,
      res = 0,
      body = 0,
      result = 0

    if (username && password) {
      body = {
        username: username,
        password: password,
      }
      res = await fetch('http://localhost:8888/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      result = await res.json()
      if (result.data) {
        user.put('user',body)
          this.props.history.push('/user')
      }
    }
  }
  render() {
    return (
      <div className="el-login">
        <header>
          <div>
            <Svg icon="icon-aoliao" />
          </div>
          <div className="link">
            <div>短信登录</div>
            <div>密码登录</div>
          </div>
        </header>
        <main>
          <form>
            <label>
              用户名：
              <input
                type="text"
                ref="username"
                placeholder="用户名"
                require="true"
              />
            </label>
            <label>
              密码：
              <input
                type="password"
                ref="password"
                placeholder="密码"
                require="true"
              />
            </label>
            <button type="button" onClick={this.userLogin}>
              登录
            </button>
          </form>
          <a href="#">关于我们</a>
        </main>
      </div>
    )
  }
}
