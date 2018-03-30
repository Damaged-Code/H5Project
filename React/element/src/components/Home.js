import React, { Component } from 'react'
import Footer from './home/Footer'
import Header from './home/Header'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />

        <Footer />
      </div>
    )
  }
}
