import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Thermometer from './thermometer/Thermometer'
import ToDoList from './todo-list/ToDoList'

class Home extends Component { 
    render(){ 
        return (
            <div>
                <h2>Home</h2>
                <p>Hello React</p>
            </div>
        )
    }
}
class App extends Component {
  render() {
      return (
        <Router>
              <div className="App">
              <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/thermometer">Thermometer</Link>
                      </li>
                      <li>
                          <Link to="/todolist">ToDoList</Link>
                      </li>
                      
             </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/thermometer" component={Thermometer} />
            <Route path='/todolist' component={ToDoList}></Route>      
            </div>
        </Router>
    );
  }
}

export default App;
