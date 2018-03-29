import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules';
import styles from '../../styles/HeaderNav.css';

 class HeaderNav extends Component {
  render() {
    return (
      <nav>
        <ul styleName='LinkList'>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to='test'>上报漏洞/情报</Link>
          </li>
          <li>
            <Link to="/announcement">公告</Link>
          </li>
          <li>贡献榜</li>
          <li>礼品兑换</li>
          <li>博客</li>
          <li>个人中心</li>
        </ul>
      </nav>
    )
  }
}

export default CSSModules(HeaderNav, styles);