import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Advert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: this.props.imgUrl || '',
      path: this.props.path || '/',
    }
  }

  render() {
    return (
      <div className="advert">
        <Link to={this.state.path}>
          <img src={this.state.imgUrl} alt="" />
        </Link>
      </div>
    )
  }
}
