import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class SubmitButton extends Component {
  render(){
    return(<div>
    <Button bsStyle="warning" bsSize="large" block type="submit">
      Submit
    </Button>
  </div>);
  }
}
