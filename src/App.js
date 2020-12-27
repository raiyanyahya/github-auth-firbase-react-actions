
import React, { Component } from "react";
import FirebaseSignIn from "./components/FirebaseSignIn";
import "./css/App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <FirebaseSignIn />
      </div>
    );
  }
}

export default App;
