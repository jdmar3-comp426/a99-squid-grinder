import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { Component } from 'react';

function App() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element = { <Home /> } />
            <Route path="/login" element = { <Login /> } />
            <Route path="/signUp" element = { <SignUp /> } />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;