import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <Dashboard path="/dashboard" />
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
