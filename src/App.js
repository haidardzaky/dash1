import React, { Component } from "react";
import { Link } from "react-router-dom";
import { 
  Row,
  Col,
  Button, 
  FormGroup, 
  FormControl, 
  ControlLabel 
} from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="site-wrapper">
            <div className="flex-container">
                <div className="left">
                  <div className="welcome-title">Welcome Partner!</div>
                  <small>Sign into your account here</small>
                  <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                      />
                    </FormGroup>
                    <Button
                      block
                      bsSize="large"
                      disabled={!this.validateForm()}
                      type="submit"
                    >
                      Login
                    </Button>
                  </form>
                </div>
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