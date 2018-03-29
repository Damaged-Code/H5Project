import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return <div>我是首页啦 啥都没=。=</div>
  }
}
