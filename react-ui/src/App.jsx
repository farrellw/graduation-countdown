import React from "react";
import logo from "./kaiser.jpeg";
import "./App.css";
import CountdownContainer from "./components/countdown/CountdownContainer.jsx";
import MotivationContainer from "./components/motivation/MotivationContainer.jsx";
import MyModal from "./components/MyModal.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Retirement Countdown</h1>
        </header>
        <CountdownContainer date={this.props.date} />
        <MotivationContainer phrases={this.props.phrases} />
        <br />
        <MyModal phrases={this.props.phrases} />
      </div>
    );
  }
}

export default App;
