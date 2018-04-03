import React, { Component } from 'react'
import ShopInfoHead from './shopInfo/ShopInfoHead'
import ShopInfoMenus from './shopInfo/ShopInfoMenus'
import axios from 'axios'

export default class ShopOInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopInfo: '',
      foods: [{}],
    }
  }
  componentWillMount() {
    //console.log(this.props.location.query)
  }

  render() {
    return (
      <div className="el-shopInfo">
        <ShopInfoHead tag={this.props.location.query.tag} />
        <div className="shopInfo-Link">
          <div>
            <span>点餐</span>
          </div>
          <div>
            <span>点餐</span>
          </div>
          <div>
            <span>点餐</span>
          </div>
        </div>
        <ShopInfoMenus
          ps={this.props.location.query.tag.float_delivery_fee}
          qs={this.props.location.query.tag.float_minimum_order_amount}
          shopId={this.props.location.query.tag.shop_id}
          menus={this.props.location.query.foods}
        />
      </div>
    )
  }
}
