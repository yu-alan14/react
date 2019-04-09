import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="main-nav">
          <ul classname="menu-list">
            <li className="menu-list-item">
              <a className="menu-link" href="/">
                Home
              </a>
            </li>
            <li className="menu-list-item">
              <a className="menu-link" href="/">
                Skills
              </a>
            </li>
            <li className="menu-list-item">
              <a className="menu-link" href="/">
                Resume
              </a>
            </li>
            <li className="menu-list-item">
              <a className="menu-link" href="/">
                Github
              </a>
            </li>
          </ul>
        </nav>
        <div className="App-header">
          <h1>ALAN YU</h1>
        </div>
        <div className="Summary">Summary</div>
        <div className="Projects">Projects</div>
        <div className="Experience">Experience</div>
      </div>
    );
  }
}

export default App;
