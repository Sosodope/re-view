import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { link } from "fs";
import Background from "./Background";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div className="App Wrapper">
        <h1>Users</h1>
        <div className="Contacts">
          {this.state.users.map(user => (
            <React.Fragment>
              <Background />
              <h1 className="Username">{user.username}</h1>
              <h5 className="Location">{user.location}</h5>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
