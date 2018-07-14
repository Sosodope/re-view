import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { link } from "fs";
import Background from "./Background";

class Users extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    fetch("/profiles")
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="Contacts">
          {this.state.data.map(data => (
            <React.Fragment>
              <h1 className="Username">{data.username}</h1>
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
