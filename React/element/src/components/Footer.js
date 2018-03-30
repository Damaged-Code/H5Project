import React, { Component } from 'react'
import Link from 'react-router-dom'

const routes = [
  {
    path: '',
    exact: true,
    component: ''
  },
  {},
  {},
  {}
]
export default class Footer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div>
          <ul>
            <li />
          </ul>
        </div>
      </footer>
    )
  }
}
