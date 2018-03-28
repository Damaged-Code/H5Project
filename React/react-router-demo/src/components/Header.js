import React, { Component } from 'react';
import '../styles/Header.css'
import HeaderNav from './HeaderNav';

export default class Header extends Component {
  render() {
    return (
      <header className='header clearfix'>
        <div className='logo'>
          <img src="https://security.ele.me/images/header_logo.png" alt=""/>
        </div>
        <HeaderNav></HeaderNav>
      </header>
    );
  }
} 