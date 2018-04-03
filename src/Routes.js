import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Blog";

export default () =>
  <Switch>
    <Route path="/blog" exact component={Blog} />
  </Switch>;