import React, { Component } from 'react'
import Title from '../parts/Title'
import ShopList from '../parts/ShopList'
import axios from 'axios'
export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopList: [],
      foods: [],
      hasList: false,
    }
  }
  componentWillMount() {
    axios({
      baseURL: 'http://localhost:8888',
      url: '/shop',
      method: 'GET',
      params: {
        limit: 8,
        offset: 0,
      },
    }).then(async res => {
      if (res.data.data) {
        this.setState({
          shopList: await res.data.data,
          hasList: true,
        })
      }
    })
    axios({
      baseURL: 'http://localhost:8888',
      url: '/menus',
      method: 'GET',
    }).then(async res => {
      if (res.data.data) {
        this.setState({
          foods: res.data.data[0].menus,
        })
      }
    })
  }
  render() {
    return (
      <main className="el-home-main">
        <Title text="推荐商家" />
        {this.state.hasList ? (
          <ShopList shopList={this.state.shopList} foods={this.state.foods} />
        ) : (
          <ShopList shopList={this.state.shopList} />
        )}
      </main>
    )
  }
}
