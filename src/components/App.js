import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import HelloBox from "./HelloBox";
import Tweet from "./Tweet";
import UserFrame from "./UserFrame";
import Auth from "./Auth";

const App = () => {
  return <Auth />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
