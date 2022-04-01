import React from 'react';
//import logo from './logo.svg';
import nookleaflogo from './nook-leaf-logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={nookleaflogo} className="App-logo" alt="villager logo" />
        <p>
          Welcome to Nook Chat. Please sign in!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
