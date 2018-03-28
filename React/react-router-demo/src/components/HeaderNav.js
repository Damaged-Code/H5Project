import React, { Component } from 'react';
import '../styles/HeaderNav.css'
import { BrowserRouter as Router,  Link } from "react-router-dom";

export default class HeaderNav  extends Component {
  render() {
    return (
      <Router>
        <nav>
            <ul className='LinkList'>
              <li>首页</li>
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
      </Router>
    );
  }
}