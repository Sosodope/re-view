import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { link } from "fs";
import Background from "./Background";
import Users from "./Users";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <h1>Users</h1>
        <div className="Contacts">
          <Background />
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
