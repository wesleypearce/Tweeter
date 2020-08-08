import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import HelloBox from "./HelloBox";
import Tweet from "./Tweet";
import UserFrame from "./UserFrame";
import Auth from "./Auth";
import Home from "./Home";

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
