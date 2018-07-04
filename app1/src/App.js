import React, { Component } from 'react';
import { BrowserRouter,Route,Link } from 'react-router-dom'
import './App.css';
import Users from './Components/Users'
class App extends Component {
 
 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Users/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
