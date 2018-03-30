import React, { Component } from 'react'
import './styles/App.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div styleName="App" />
      </Router>
    )
  }
}

export default App
