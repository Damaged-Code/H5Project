import React, { Component } from 'react';
import MyRouter from '../../router'

export default class MainContent extends Component {
  render() {
    return (
        <main className='main'>
          <MyRouter />
        </main>
    );
  }
}