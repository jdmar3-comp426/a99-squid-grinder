import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';  
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Account from './Account';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/app/" element={<Home />}></Route>
            <Route path="/app/clicker" element={<Counter />}></Route>
            <Route path="/app/account" element={<Account />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
