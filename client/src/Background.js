import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { link } from "fs";

class Background extends Component {
  state = {
    pictures: []
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let pictures = data.results.map(pic => {
          return (
            <div key={pic.results}>
              <img src={pic.picture.large} />
            </div>
          );
        });
        this.setState({ pictures: pictures });
      });
  }
  render() {
    return (
      <div className="Images">
        <React.Fragment>{this.state.pictures}</React.Fragment>
      </div>
    );
  }
}

export default Background;
