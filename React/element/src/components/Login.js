import React, { Component } from 'react'
import Svg from './Svg'
import fetch from 'node-fetch'
import { LocalStorage } from '../utils/storage';
import axios from 'axios';

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
      res = await axios({
        baseURL: ''http://localhost:8888'',
          url:'/login',  
        method: 'POST',
        data: {
          username: username,
        password: password,
        }
        
      })
      result = await res.json()
      if (result.data) {
        LocalStorage.set('user',{username:username})
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
