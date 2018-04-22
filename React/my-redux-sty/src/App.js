import React, { Component } from 'react';
import './App.css';
import ShowMsg from './components/ShowMsg';
import AddMsg from './containers/AddMsg';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <span>1111</span>
        <ShowMsg />
        <AddMsg />
      </div>
    );
  }
}

export default App;
