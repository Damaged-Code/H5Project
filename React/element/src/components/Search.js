import React, { Component } from 'react'
import SearchInput from './search/SearchInput'
import SearchShow from './search/SearchShow'
import Footer from './home/Footer'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal: '',
      hasVal: false,
    }
  }
  onChangeVal = val => {
    if (val !== '') {
      this.setState(
        {
          searchVal: val,
          hasVal: true,
        },
        () => {
          this.searchKeywords()
        },
      )
    }
  }
  searchKeywords() {
    if (this.state.hasVal) {
      return (
        <SearchShow hasVal={this.state.hasVal} value={this.state.searchVal} />
      )
    } else {
      return (
        <SearchShow hasVal={this.state.hasVal} value={this.state.searchVal} />
      )
    }
  }
  render() {
    return (
      <div className="el-search">
        <SearchInput onChangeVal={this.onChangeVal} />
        {this.searchKeywords()}
        <Footer />
      </div>
    )
  }
}
