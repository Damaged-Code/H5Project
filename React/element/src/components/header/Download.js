import React, { Component } from 'react'
import propTypes from 'prop-types'
export default class Download extends Component {
  static propTypes = {
    imgUrl: propTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      imgUrl:
        'https://fuss10.elemecdn.com/e/22/891aa1898e598f3051017ae1c9bd5png.png?imageMogr/format/webp/'
    }
  }

  render() {
    return (
      <div className="download">
        <img src={this.state.imgUrl} alt="" />
      </div>
    )
  }
}
