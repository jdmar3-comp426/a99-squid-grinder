import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import power_button from './power-button.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={power_button} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
