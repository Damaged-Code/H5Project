import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class ShopList extends Component {
  static propTypes = {
    shopList: propTypes.array
  }
  constructor(props) {
    super(props)
    this.state = {
      shopList: []
    }
  }

  render() {
    return (
      <div>
        <ul />
      </div>
    )
  }
}
