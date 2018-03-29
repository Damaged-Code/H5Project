import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/HeaderNav.css';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav>
        <ul className={styles.LinkList}>
          <li>
              <Link to='/'>首页</Link>
            </li>
            <li>上报漏洞/情报</li>
            <li>
              <Link to='/announcement'>公告</Link>  
            </li>
            <li>贡献榜</li>
            <li>礼品兑换</li>
            <li>博客</li>
            <li>个人中心</li>
            </ul>
          </nav>
    );
  }
}