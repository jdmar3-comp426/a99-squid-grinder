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


function App() {

  const [home, setHome] = useState(true);
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/clicker" element={<Counter />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
