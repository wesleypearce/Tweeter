import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { Router } from "@reach/router";
import { auth } from "../firebase";

const App = () => {
  const [user, setUser] = useState(null);

  let unsubscribeFromAuth = null;

  unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    console.log(user);
    setUser(user);
  });

  return (
    <Router>
      <Home path="/" user={user} setUser={setUser} />
      <Dashboard path="/dashboard" />
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
