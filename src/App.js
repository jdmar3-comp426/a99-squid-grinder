import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import power_button from './power-button.jpeg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';  
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element = { <Home />} />
            <Route path="/Login" element = { <Login /> } />
            <Route path="/SignUp" element = { <SignUp /> } />
            <Route path="/clicker" element = {
              <img src={power_button} className="App-logo" alt="logo" />, 
              <Counter />
             } /> 
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
