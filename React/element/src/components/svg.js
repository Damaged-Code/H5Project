import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Svg extends Component {
  static propTypes = {
    icon: propTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      icon: this.props.icon
    }
  }

  render() {
    return (
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#${this.state.icon}`} />
      </svg>
    )
  }
}
