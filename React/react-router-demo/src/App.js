import React, { Component } from 'react'
import './App.css'
import { BrowserRouter , HashRouter } from 'react-router-dom'
import Header from './components/header/Header';
import MainContent from './components/main/MainContent';

let Router = process.env.NODE_ENV !== 'production' ? BrowserRouter : HashRouter;
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <MainContent></MainContent>
        </div>
      </Router>
    )
  }
}

export default App
