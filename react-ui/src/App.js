import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountdownContainer from "./components/CountdownContainer.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Brown School Graduation 2018</h1>
        </header>
        <CountdownContainer />
      </div>
    );
  }
}

export default App;
