import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'

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
