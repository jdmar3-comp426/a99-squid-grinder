import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import power_button from './power-button.jpeg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';  
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/clicker">
              <img src={power_button} className="App-logo" alt="logo" />
              <Counter />
            </Route>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
