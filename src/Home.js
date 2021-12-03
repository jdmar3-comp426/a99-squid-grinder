import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Li } from 'react-router-dom';
import { Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import SignUp from './SignUp.js';
import Login from './Login.js';

class Home extends React.Component {
    render() { 
        return (
            <div className="Home">
                <h1>Clicker</h1>
                <div class="buttons">
                    <div class="action_btn">
                        <button name="login" type="submit" value="Save" onclick="myFunction()">
                            <Link to="/login">Login</Link>
                        </button>
                        <button name="signup" type="submit" value="Cancel" onclick="myFunction2()">
                            <Link to="/signup">Sign Up</Link>
                        </button>
                        <p id="saved"></p>
                    </div>
                </div>
                <div>
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<SignUp />}></Route>
                    </Routes>
                </div>
            </div>
            );
    }
}
 
export default Home;