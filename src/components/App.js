import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import UserFrame from "./UserFrame";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <UserFrame path="/dashboard" />
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
