import React, { Component } from 'react'
import propTypes from 'prop-types'
import Svg from '../Svg'

export default class HeadTitle extends Component {
  static propTypes = {
    text: propTypes.string,
  }
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text || '=.=',
    }
  }

  render() {
    return (
      <header className="head-title">
        <div className="content">
          <Svg icon="icon-arrow-left" />
          <h1>{this.state.text}</h1>
        </div>
      </header>
    )
  }
}
