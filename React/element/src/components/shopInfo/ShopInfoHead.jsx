import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Svg from '../Svg'

export default class ShopInfoHead extends Component {
  render() {
    return (
      <header className="shopInfo-head">
        <nav>
          <img src={this.props.tag.image_path} alt="" />
          <Link to="/">
            <Svg icon="icon-arrow-left" />
          </Link>
        </nav>
        <div className="shopInfo-head-title">
          <img src={this.props.tag.image_path} alt="" />
          <div className="shopInfo-head-name">
            <h2>
              <span className="pp">品牌</span>
              <span className="name">{this.props.tag.name}</span>
              <Svg icon="icon-jiantouarrow486" />
            </h2>
            <div className="info">
              <span>{this.props.tag.rating}</span>
              <span> 月售 {this.props.tag.recent_order_num} 单</span>
              <span>
                蜂鸟专送
                <span>约 {this.props.tag.order_lead_time} 分钟</span>
              </span>
              <span>距离 {this.props.tag.distance}m</span>
            </div>
            <p className="desc">
              客服电话：4000979797 我店已经上线电子票据, POS
              小票上已经提供了提取码, 您可以通过扫描 POS
              小票上的提取码自行开具并下载。
            </p>
          </div>
        </div>
        <div className="sale">
          <div className="sale-info">
            <div>
              <span style={{ backgroundColor: 'rgb(240, 115, 115)' }}>
                满减
              </span>
              <span>满 35 减 10，满 60 减 20</span>
            </div>
          </div>
          <div className="sale-action">2 个优惠</div>
        </div>
        <div className="gift">
          <div>
            <Svg icon="icon-jinbi" />
            <p>4 元无门槛红包</p>
            <button>领取</button>
          </div>
        </div>
      </header>
    )
  }
}
