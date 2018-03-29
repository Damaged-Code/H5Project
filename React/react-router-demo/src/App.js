import React, { Component } from 'react'
import styles from './App.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import Header from './components/header/Header'
import MainContent from './components/main/MainContent'
import CSSModules from 'react-css-modules'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}
  render() {
    return (
      <Router history={history}>
        <div styleName="App">
          <Header />
          <MainContent />
        </div>
      </Router>
    )
  }
}

export default CSSModules(App, styles)
