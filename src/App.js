import logo from './logo.svg';
import './App.css';

function App() {
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

export default App;
