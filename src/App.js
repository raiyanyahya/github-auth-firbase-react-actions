import firebase from "firebase/app";
import "firebase/auth";
import React, { Component } from "react";
import Firebase from "./components/firebase";
import "./css/App.css";
require("dotenv").config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN_URL,
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Firebase />
      </div>
    );
  }
}

export default App;
