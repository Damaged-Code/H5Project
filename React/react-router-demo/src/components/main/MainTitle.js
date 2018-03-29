import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../../styles/MainTitle.css'

class MainTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      picUrl: this.props.picUrl
    }
  }

  render() {
    return (
      <div styleName="title">
        <p styleName="title-text"> {this.state.title}</p>
        <img styleName="title-img" src={this.state.picUrl} alt="" />
      </div>
    )
  }
}
export default CSSModules(MainTitle, styles)
