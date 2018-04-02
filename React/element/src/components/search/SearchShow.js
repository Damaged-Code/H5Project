import React, { Component } from 'react'
import SearchHistory from './SearchHistory'
import SearchList from './SearchList'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasVal: this.props.hasVal || false,
      value: this.props.value || '',
    }
  }

  render() {
    if (this.state.hasVal && this.state.value !== '') {
      return <SearchList />
    } else {
      return <SearchHistory />
    }
  }
}
