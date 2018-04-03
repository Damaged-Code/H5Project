import React, { Component } from 'react'
import propTypes from 'prop-types'
import Svg from '../Svg'
import { Link } from 'react-router-dom'

export default class HeadTitle extends Component {
  static propTypes = {
    text: propTypes.string,
    path: propTypes.string,
  }
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || '=.=',
      path: this.props.path || '/',
    }
  }

  render() {
    let text = this.props.text,
      path = this.props.path
    return (
      <header className="head-title">
        <div className="content">
          <Link to={path}>
            <Svg icon="icon-arrow-left" />
          </Link>
          <h1>{text}</h1>
        </div>
      </header>
    )
  }
}
