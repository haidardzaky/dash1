import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class BlockButton extends component {
  render(){
    return(<div className="well">
    <Button bsStyle="warning" bsSize="large" block type="submit">
      Submit
    </Button>
  </div>);
  }
}
