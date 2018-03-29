import React, { Component } from 'react'
import MainTitle from './MainTitle'

export default class Announcement extends Component {
  render() {
    return (
      <div>
        <MainTitle
          title="公告"
          picUrl="https://security.ele.me/images/f1_textbg.png"
        />
        <div>我是公告啦</div>
      </div>
    )
  }
}
