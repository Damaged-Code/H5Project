import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AdvertsBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      box: this.props.box,
    }
  }

  render() {
    return (
      <section>
        {this.state.box.map((box, index) => {
          return (
            <Link key={index} style={{ display: 'flex' }} to={box.path}>
              <div>
                {box.text.map((text, index) => {
                  return <p key={`text-${index}`}>{text}</p>
                })}
              </div>

              <img src={box.imgUrl} alt="" />
            </Link>
          )
        })}
      </section>
    )
  }
}
