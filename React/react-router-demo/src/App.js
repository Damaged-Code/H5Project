import React, { Component } from 'react';
import Header from './components/Header';
import MyRouter from './router';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header></Header>
          <MyRouter></MyRouter>
        </div>
    );
  }
}

export default App;
