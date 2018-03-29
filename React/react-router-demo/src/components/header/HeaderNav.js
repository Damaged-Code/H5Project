import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from '../../styles/HeaderNav.css'

let NavLinkList = [
  {
    pathname: '/',
    text: '首页',
    activeState: true
  },
  {
    pathname: '/',
    text: '上报漏洞/情报',
    activeState: false
  },
  {
    pathname: '/announcement',
    text: '公告',
    activeState: false
  },
  {
    pathname: '/',
    text: '贡献榜',
    activeState: false
  },
  {
    pathname: '/',
    text: '贡献榜',
    activeState: false
  },
  {
    pathname: '/',
    text: '礼品兑换',
    activeState: false
  },
  {
    pathname: '/',
    text: '博客',
    activeState: false
  },
  {
    pathname: '/',
    text: '个人中心',
    activeState: false
  }
]

class HeaderNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      NavLinkList: NavLinkList
    }
  }
  componentDidMount() {}
  changeLinkState = e => {
    let tagIndex = +e.target.getAttribute('data-index')

    NavLinkList.map((tag, index) => {
      if (tagIndex === index) {
        tag.activeState = true
      } else {
        tag.activeState = false
      }
      return true
    })
    this.setState({
      NavLinkList: NavLinkList
    })
  }
  render() {
    return (
      <nav>
        <ul styleName="LinkList">
          {this.state.NavLinkList.map((tag, index) => {
            return (
              <li key={`nav-${index}`} onClick={this.changeLinkState}>
                <Link
                  to={tag.pathname}
                  styleName={tag.activeState ? 'LinkActive' : ''}
                  data-index={index}
                >
                  {tag.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default CSSModules(HeaderNav, styles)
