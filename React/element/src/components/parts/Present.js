import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Present extends Component {
  constructor(props) {
    super(props)
    this.state = {
      presents: this.props.presents || {},
    }
  }

  render() {
    return (
      <div className="present">
        <Link to="#">
          <img src={this.state.presents.imgUrl} alt="" />
          <div className="food-info">
            <p className="food-name ui-ellipsis">{this.state.presents.name}</p>
            <div className="food-price">
              <span className="price ui-ellipsis">
                {this.state.presents.Price}
              </span>
              <del className="original-price ui-ellipsis">
                ${this.state.presents.salePrice}
              </del>
            </div>
          </div>
          <span className="discount">{this.state.presents.type}</span>
        </Link>
      </div>
    )
  }
}
