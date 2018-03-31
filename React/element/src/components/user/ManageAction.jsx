import React, { Component } from 'react'
import Svg from '../Svg'

export default class ManageAction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      box: this.props.boxes || {
        icon: 'icon-jinbi',
        text: '钱包',
      },
    }
  }
  render() {
    return (
      <div className="box">
        <p>
          <Svg icon={this.state.box.icon} />
        </p>
        <p>{this.state.box.text}</p>
      </div>
    )
  }
}
