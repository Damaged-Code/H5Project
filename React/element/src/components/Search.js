import React, { Component } from 'react'
import SearchInput from './search/SearchInput'
import SearchHistory from './search/SearchHistory'
import Footer from './home/Footer'

export default class Search extends Component {
  render() {
    return (
      <div className="el-search">
        <SearchInput />
        <SearchHistory />
        <Footer />
      </div>
    )
  }
}
