import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { Router } from "@reach/router";

const App = () => {
  const defaultUser = {
    displayName: "Wes Pearce",
    email: "wespearce1@gmail.com",
    photoURL:
      "https://pbs.twimg.com/profile_images/755566822930296832/ub182pct_normal.jpg"
  };
  const [user, setUser] = useState();

  return (
    <Router>
      <Home path="/" user={user} setUser={setUser} />
      <Dashboard path="/dashboard" user={user} setUser={setUser} />
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
