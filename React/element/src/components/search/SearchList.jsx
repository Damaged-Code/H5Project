import React, { Component } from 'react'
import propTypes from 'prop-types'
import Svg from '../Svg'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class extends Component {
  static propTypes = {
    value: propTypes.string.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      shopInfo: [],
      keywords: '',
    }
  }

  componentDidMount() {
    axios({
      baseURL: 'http://localhost:8888',
      url: '/shop',
      method: 'POST',
      params: {
        keywords: this.props.value,
      },
    })
      .then(res => {
        console.log(res.data)
        if (res.data.data) {
          this.setState({
            shopInfo: res.data.data,
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="search-list-item">
        <ul className="key-list">
          {this.state.shopInfo.map((tag, index) => {
            return (
              <li key={index}>
                <Link to="/">
                  <div className="item">
                    <img src={tag.image_path} alt="" />
                    <div>
                      <p>{tag.name}</p>
                      <span>评价:{tag.rating}</span>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className="word-list">
          {this.state.shopInfo.map((tag, index) => {
            return (
              <li key={index}>
                <Svg icon="icon-sousuo1" />
                <p>{tag.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
