import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import AddProduct from "./pages/AddProduct";
import "./index.css";
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/add-product" component={AddProduct} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
