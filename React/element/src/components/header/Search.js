import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Svg from '../Svg'

export default class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="link">
          <Link to="/search">
            <Svg icon="icon-sousuo1" />
            <span>搜索饿了么商家、商品名称</span>
          </Link>
        </div>
      </div>
    )
  }
}
