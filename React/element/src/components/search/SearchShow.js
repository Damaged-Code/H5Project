import React, { Component } from 'react'
import SearchHistory from './SearchHistory'
import SearchList from './SearchList'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    if (this.props.hasVal && this.props.value !== '') {
      return <SearchList value={this.props.value} />
    } else {
      return <SearchHistory />
    }
  }
}
