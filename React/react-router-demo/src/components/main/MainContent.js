import React, { Component } from 'react';
import MyRouter from '../../router'
import styles from '../../styles/Main.css';

export default class MainContent extends Component {
  render() {
    return (
        <main className={styles.main}>
          <MyRouter />
        </main>
    );
  }
}