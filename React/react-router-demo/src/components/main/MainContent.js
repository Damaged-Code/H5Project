import React, { Component } from 'react'
import MyRouter from '../../router'
import styles from '../../styles/Main.css'
import CSSModules from 'react-css-modules'

class MainContent extends Component {
  render() {
    return (
      <main styleName="main">
        <MyRouter />
      </main>
    )
  }
}
export default CSSModules(MainContent, styles)
