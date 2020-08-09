import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { Router, navigate } from "@reach/router";

const App = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (user != null) {
      console.log(`${user.screen_name} is logged in`);

      navigate("/dashboard", { state: { user: user } });
    }
    if (authError != "") console.log("no error");
  });

  return (
    <Router>
      <Home path="/" setUser={setUser} setAuthError={setAuthError} />
      <Dashboard path="/dashboard" />
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
