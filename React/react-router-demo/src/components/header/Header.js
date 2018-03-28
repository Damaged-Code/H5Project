import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import styles from '../../styles/Header.css';
import classNames from 'classnames/bind';

let headerSty = classNames.bind(styles)
export default class Header extends Component {
  render() {
    let className = headerSty({
      header:true
    })
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="https://security.ele.me/images/header_logo.png" alt=""/>
        </div>
        <HeaderNav></HeaderNav>
        </header>
    );
  }
}