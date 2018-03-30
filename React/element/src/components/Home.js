import React, { Component } from 'react'
import Footer from './home/Footer'
import Header from './home/Header'
import Main from './home/Main'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="el-home">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
