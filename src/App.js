import { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'hello react';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {name}
        </header>
      </div>
    );
  }
}

export default App;
