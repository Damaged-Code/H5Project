import React, { Component } from 'react'
import Svg from '../Svg'
import { Link } from 'react-router-dom'

export default class Address extends Component {
  render() {
    return (
      <section className="address">
        <Link to="/">
          <button>
            {' '}
            <Svg icon="icon-iconjia" />添加收货地址
          </button>
        </Link>
      </section>
    )
  }
}
