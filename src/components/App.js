import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { Router } from "@reach/router";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Home path="/" user={user} setUser={setUser} />
      <Dashboard path="/dashboard" user={user} setUser={setUser} />
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
