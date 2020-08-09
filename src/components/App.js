import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import UserFrame from "./UserFrame";
import { Router } from "@reach/router";

const App = () => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (user != null) console.log(user.screen_name);
  });

  return (
    <Router>
      <Home path="/" setUser={setUser} setAuthError={setAuthError} />
      <UserFrame path="/dashboard" />
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
