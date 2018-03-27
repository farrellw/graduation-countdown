import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountdownContainer from "./components/CountdownContainer.jsx";
import EncouragementContainer from './components/EncouragementContainer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Brown School Graduation 2018</h1>
                </header>
                <CountdownContainer />
                <div>
                    <EncouragementContainer phrases={this.props.phrases}/>
                </div>
            </div>
        );
    }
}

export default App;
