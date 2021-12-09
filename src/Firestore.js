import React from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase';
import { initializeApp } from "firebase/app";

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