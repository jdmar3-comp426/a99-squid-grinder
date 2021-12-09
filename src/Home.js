import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Li } from 'react-router-dom';
import { Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import SignUp from './SignUp.js';
import Login from './Login.js';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase';
import 'firebase/auth'
import Button from '@material-ui/core/Button'
import { Menu } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { initializeApp } from "firebase/app";

const userID = undefined;

const firebaseConfig = {
  apiKey: "AIzaSyAl9k2QEqmz1fKRfu9o4EBFDAjnqrEzyW0",
  authDomain: "comp426-2.firebaseapp.com",
  databaseURL: "https://comp426-2-default-rtdb.firebaseio.com",
  projectId: "comp426-2",
  storageBucket: "comp426-2.appspot.com",
  messagingSenderId: "844246038565",
  appId: "1:844246038565:web:ae51db597b0bee81a967cc"
};


const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

const useStyles = makeStyles((theme) => ({
    login: {
        backgroundColor: "#3b753d",
        color: "#fcfcfc",
    },
}));


function Home(parentCallback) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

 
    const classes = useStyles();
        return (
            <div className="Home">
                <h1>Clicker</h1>
                <div class="buttons">
                    <Button variant = "contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="loginbtn">
                        Login
                    </Button>
                    <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >
                        <MenuItem onClick={signInWithGoogle}><Link to="/app/clicker">Login with Google</Link></MenuItem>
                        <MenuItem onClick={handleClose}>Login with Email</MenuItem>
                    </Menu>
                </div>
                <div>
                </div>
            </div>
            );
}
 
export default Home;
