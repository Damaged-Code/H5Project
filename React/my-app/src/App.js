import React, {Component} from 'react';
import './App.css';
import Thermometer from './thermometer/Thermometer'

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Thermometer/>
      </div>
    );
  }
}

export default App;
