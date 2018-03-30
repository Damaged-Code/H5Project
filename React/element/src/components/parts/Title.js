import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Title extends Component {
  static propTypes = {
    text: propTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text
    }
  }

  render() {
    return <div className="title">{this.state.text}</div>
  }
}
