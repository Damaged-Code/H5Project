import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Advertise extends Component {
  static propTypes = {
    imgUrl: propTypes.string,
    text: propTypes.array
  }
  constructor(props) {
    super(props)
    this.state = {
      imgUrl:
        'https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/',
      text: ['1234', '123123', '213123>']
    }
  }

  render() {
    return (
      <div className="advertise">
        <section className="content">
          <div className="text">
            {this.state.text.map((text, index) => {
              return <p key={index}>{text}</p>
            })}
          </div>
          <img src={this.state.imgUrl} alt="" />
        </section>
      </div>
    )
  }
}
