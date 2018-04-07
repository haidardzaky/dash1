import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubmitButton from './components/SubmitButton';

import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="site-wrapper">
            <div className="flex-container">
                <div className="right">
                  <h1>We Help You To Connect</h1>
                  <div className="">Start listing your offers with us and connect with million of travel enthusiasts.<br />
                  Get ready to grow your business!</div>
                </div>
            </div>
      </div>
    );
  }
}

export default App;
