import React from "react";
import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import HomePage from "./views/HomePage/HomePage.js";
import Dashboard from "./views/Dashboard/Dashboard.js";
import SignIn from "./views/Auth/SignIn";
import SignUp from "./views/Auth/SignUp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
