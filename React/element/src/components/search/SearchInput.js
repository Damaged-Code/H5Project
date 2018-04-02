import React, { Component } from 'react'
import Svg from '../Svg'
import { Link } from 'react-router-dom'

export default class searchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal: '',
    }
  }
  searchValue = e => {
    this.setState({
      searchVal: e.target.value,
    })
  }
  sendValue = () => {
    this.props.onChangeVal(this.state.searchVal)
  }
  render() {
    return (
      <header className="search-head">
        <Link className="back" to="/">
          <Svg icon="icon-arrow-left" />
        </Link>
        <form action="" className="el-input">
          <input
            type="search"
            placeholder="输入商家、商品名称"
            onInput={this.searchValue}
            value={this.searchVal}
            autoComplete="off"
          />
          <Svg icon="icon-sousuo1" />
          <button type="button" onClick={this.sendValue}>
            搜索
          </button>
        </form>
      </header>
    )
  }
}
