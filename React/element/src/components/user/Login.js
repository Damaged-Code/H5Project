import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Svg from '../Svg'

const user = {
  photo: 'icon-yonghuguanli',
  name: '登陆 / 注册',
  icon: 'icon-shouji',
  desc: '登录后享受更多特权',
  direction: 'icon-jiantouyou',
}
export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user || user,
    }
  }

  render() {
    return (
      <section className="login">
        <span className="photo">
          <Svg icon={this.state.user.photo} />
        </span>
        <div className="info">
          <p className="name">{this.state.user.name}</p>
          <p>
            <span>
              <Svg icon={this.state.user.icon} />
              {this.state.user.desc}
            </span>
          </p>
        </div>
        <span>
          <Svg icon={this.state.user.direction} />
        </span>
      </section>
    )
  }
}
