import React, { Component } from 'react'
import Title from '../parts/Title'
import ShopList from '../parts/ShopList'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <main className="el-home-main">
        
        <Title text="推荐商家" />
        <ShopList />
      </main>
    )
  }
}
